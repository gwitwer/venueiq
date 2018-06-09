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
  misc: { type: Schema.Types.Mixed }, // This is some ads bullshit (temporary)
  activeFields: { type: ['String'], default: [
    'revenue',
    'attendance',
    'promotional-spending',
    'day',
    'genre',
  ] }, // These are how the events are filtered.
  // If we have a hard-coded method for fetching the data, then it's just a string
  // Otherwise a . join on the path to the item in data.
});

export default mongoose.model('User', userSchema);
