import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: 'String', required: true },
  type: { type: 'String' },
  cuid: { type: 'String', required: true },
  dateLastUpdated: { type: 'Date', default: Date.now, required: true },
  time: { type: 'Date', required: true },
  data: {
    // Abstract this??
    // Have this as a separate model
    // Key, value, subfields array, revenue/expenditure
    // Argument against: harder to do default reporting. I like this better. Maybe add Rev/Exp though.
    barRevenue: {
      total: { type: 'Number', default: 0 },
      beer: { type: 'Number', default: 0 },
      wine: { type: 'Number', default: 0 },
      liquor: { type: 'Number', default: 0 },
    },
    grossedAtDoor: {
      total: { type: 'Number', default: 0 },
      preShowTickets: { type: 'Number', default: 0 },
      dayOfShow: { type: 'Number', default: 0 },
    },
    otherRevenue: {
      // how to handle adding additional fields?
      fields: [{
        key: { type: 'String' },
        value: { type: 'Number', default: 0 },
      }],
      total: { type: 'Number', default: 0 },
    },
  }
});

export default mongoose.model('User', userSchema);
