module.exports = () => process.env.NODE_ENV === 'production'
  ? process.env.FB_SECRET
  : require('../../config/keys/fbSecret');
