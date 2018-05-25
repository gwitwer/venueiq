import User from '../models/user';
import cuid from 'cuid';
import FB from 'fb';
import { AdAccount, AdsInsights, FacebookAdsApi, AdSet } from 'facebook-nodejs-ads-sdk';
import url from 'url';
import {
  makeHash,
  checkHash,
} from '../util/hashing';
const fbSecret = require('../util/getFbSecret')();

export function getLogin(req, res) {
  res.render('login');
}

export function postLogin(req, res) {
  const { email, pass } = req.body;
  const findUser = User.findOne({ email }).exec();
  findUser.then(user => {
    if (user) {
      if (checkHash(pass)(user.pass)) {
        console.log(user);
        req.session.user = { email: user.email, access_token: user.access_token, cuid: user.cuid }; // eslint-disable-line no-param-reassign
        res.status(200).send({ success: true, user });
      } else {
        res.status(200).send({ err: 'Incorrect password for this user' });
      }
    } else {
      res.status(200).send({ err: 'No user found with that email address.' });
    }
  }).catch(err => {
    res.status(200).send({ err });
  });
}

export function getStart(req, res) {
  res.render('start');
}

export function getSignup(req, res) {
  if (!req.query.user_id || !req.query.access_token) {
    res.redirect('/auth/start');
  } else {
    res.render('signup');
  }
}

export function postSignup(req, res) {
  const { email, pass, fb_exchange_token, user_id } = req.body;


  const findUser = User.findOne({ email }).exec();
  findUser.then(u => {
    if (u) {
      res.status(200).send({ err: 'An account has already been created for this email' });
    } else {

      // Exchange temporary access token for a permanent one
      FB.api('oauth/access_token', {
        client_id: '1547931398624085',
        client_secret: fbSecret,
        grant_type: 'fb_exchange_token',
        fb_exchange_token
      }, fbResponse => {
        if(!fbResponse || fbResponse.error) {
          console.log(!fbResponse ? 'error occurred' : fbResponse.error);
          res.status(500).send(err)
        }

        const user = new User({
          email,
          pass: makeHash(pass),
          fb_id: user_id,
          access_token: fbResponse.access_token,
          cuid: cuid(),
        });
        user.save((err, saved) => {
          if (err) {
            res.status(500).send(err);
          }
          req.session.user = { email: saved.email, access_token: saved.access_token, cuid: saved.cuid }; // eslint-disable-line no-param-reassign
          res.json({ success: true });
        });
      });
    }
  }).catch(err => {
    console.log(err);
    res.status(500).send(err)
  });
}

export function getLogout(req, res) {
  delete req.session.user; // eslint-disable-line no-param-reassign
  res.redirect('/auth/login');
}

export function getConnectPage(req, res) {
  res.render('connectPage');
}

export function getConnectAdAccount(req, res) {
  res.render('connectAdAccount');
}

export function getUpdateUserDataAndRedirect(req, res) {
  console.log('update user data');
  const findUser = User.findOne({ cuid: req.session.user.cuid }).exec();
  findUser
    .then(u => {
      console.log(u);
      let access_token = u.access_token;
      let ad_account_id = u.fb_adaccount;
      let app_secret = fbSecret;
      let app_id = '1547931398624085';
      const api = FacebookAdsApi.init(access_token);
      const account = new AdAccount(ad_account_id);
      const showDebugingInfo = true; // Setting this to true shows more debugging info.
      if (showDebugingInfo) {
        api.setDebug(true);
      }

      const fields = [
        'clicks',
        'spend',
        'impressions',
        'ad_name',
        'campaign_name',
        'adset_name',
        'cpc',
        'objective',
        'relevance_score',
        'total_actions',
        'inline_link_clicks',
        'inline_post_engagement',
        'reach',
        'call_to_action_clicks',
        'actions',
        'action_values',
        'canvas_avg_view_time',
        'cost_per_inline_post_engagement',
        'place_page_name',
        'social_clicks',
        'social_impressions',
        'social_reach',
        'social_spend',
      ];
      const params = {
        'level' : 'ad',
        'filtering' : [],
        'breakdowns' : ['age','gender'],
        'time_range' : {'since':'2017-01-01','until':'2018-05-24'},
      };
      return (new AdAccount(ad_account_id)).getInsights(
        fields,
        params
      )
      .then(result => {
        u.misc = result.map(r => r._data);
        console.log(u.misc);
        return u.save();
      })
    })
    .then(() => {
      res.redirect('/');
    })
    .catch(err => {
      console.log(err)
      res.redirect('/');
    });
}
