import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: 'String', required: true },
  type: { type: 'String' },
  cuid: { type: 'String', required: true },
  dateLastUpdated: { type: 'Date', default: Date.now, required: true },
  time: { type: 'Date', required: true },
});

export default mongoose.model('User', userSchema);
