import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: 'String', required: true, unique: true },
  pass: { type: 'String', required: true },
  dateCreated: { type: 'Date', default: Date.now, required: true },
  fb_id: { type: 'String' },
  access_token: { type: 'String' },
  cuid: { type: 'String', required: true },
  fb_page_id: { type: 'String' },
  fb_page_access_token: { type: 'String' },
  fb_adaccount: { type: 'String' },
  fb_business: { type: 'String' },
  misc: { type: Schema.Types.Mixed },
});

export default mongoose.model('User', userSchema);
