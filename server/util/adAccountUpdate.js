import { AdAccount, FacebookAdsApi } from 'facebook-nodejs-ads-sdk';
const adAccountUpdate = u => {
  const access_token = u.access_token; // eslint-disable-line camelcase
  const ad_account_id = u.fb_adaccount; // eslint-disable-line camelcase
  // const app_secret = fbSecret; // eslint-disable-line camelcase
  // const app_id = '1547931398624085'; // eslint-disable-line camelcase
  const api = FacebookAdsApi.init(access_token);
  // const account = new AdAccount(ad_account_id); // eslint-disable-line camelcase
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
    level: 'ad',
    filtering: [],
    breakdowns: ['age', 'gender'],
    time_range: { since: '2017-01-01', until: '2018-05-24' },
  };
  return (new AdAccount(ad_account_id)).getInsights( // eslint-disable-line camelcase
    fields,
    params
  )
  .then(result => {
    u.misc = result.map(r => r._data); // eslint-disable-line no-param-reassign
    return u.save();
  });
};

export default adAccountUpdate;
