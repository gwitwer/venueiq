const getFbSecret = () => (
  process.env.NODE_ENV === 'production'
    ? process.env.FB_SECRET
    : require('../../config/keys/fbSecret') // eslint-disable-line global-require
);

export default getFbSecret;
