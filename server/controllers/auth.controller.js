import User from '../models/user';
import cuid from 'cuid';
import FB from 'fb';
// import { AdAccount, AdsInsights, FacebookAdsApi, AdSet } from 'facebook-nodejs-ads-sdk';
import {
  makeHash,
  checkHash,
} from '../util/hashing';
import adAccountUpdate from '../util/adAccountUpdate';
import getFbSecret from '../util/getFbSecret';

const fbSecret = getFbSecret();

export function getLogin(req, res) {
  res.render('login');
}

export function postLogin(req, res) {
  const { email, pass } = req.body;
  const findUser = User.findOne({ email }).exec();
  findUser.then(user => {
    if (user) {
      if (checkHash(pass)(user.pass)) {
        req.session.user = { email: user.email, access_token: user.access_token, cuid: user.cuid, activeFields: user.activeFields }; // eslint-disable-line no-param-reassign
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

export function getHome(req, res) {
  res.render('home');
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
        fb_exchange_token,
      }, fbResponse => {
        if (!fbResponse || fbResponse.error) {
          // console.log(!fbResponse ? 'error occurred' : fbResponse.error);
          res.status(500).send({ err: fbResponse.error });
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
          req.session.user = { email: saved.email, access_token: saved.access_token, cuid: saved.cuid, activeFields: saved.activeFields }; // eslint-disable-line no-param-reassign
          res.json({ success: true });
        });
      });
    }
  }).catch(err => {
    res.status(500).send(err);
  });
}

export function getLogout(req, res) {
  delete req.session.user; // eslint-disable-line no-param-reassign
  res.redirect('/auth/home');
}

export function getConnectPage(req, res) {
  res.render('connectPage');
}

export function getConnectAdAccount(req, res) {
  res.render('connectAdAccount');
}

export function getUpdateUserDataAndRedirect(req, res) {
  const findUser = User.findOne({ cuid: req.session.user.cuid }).exec();
  findUser
    .then(u => {
      // TODO: Update events here!!;
      // Construct an array of promises.
      // Use if statements to push promises to the array based on what we need to update.
      // Use promise.all and then navigate to the home screen.
      const userUpdates = [];
      //
      // if (false) {
      //   // Add event update promise to userUpdates
      // }

      if (u.fb_adaccount) {
        // Add ad account insights update to userUpdates
        userUpdates.push(adAccountUpdate(u));
      }

      return Promise.all(userUpdates);
    })
    .then(() => {
      res.redirect('/');
    })
    .catch(err => {
      console.log(err); // eslint-disable-line no-console
      res.redirect('/');
    });
}
