import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const eventSchema = new Schema({
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
      _total: { type: 'Number', default: 0 },
      beer: { type: 'Number', default: 0 },
      wine: { type: 'Number', default: 0 },
      liquor: { type: 'Number', default: 0 },
    },
    grossedAtDoor: {
      _total: { type: 'Number', default: 0 },
      _group: 'rev',
      preShowTickets: { type: 'Number', default: 0 },
      dayOfShow: { type: 'Number', default: 0 },
    },
    otherRevenue: {
      _total: { type: 'Number', default: 0 },
      fields: [{
        key: { type: 'String' },
        value: { type: 'Number', default: 0 },
      }],
    },
    costOfTalent: {
      _total: { type: 'Number', default: 0 },
      cashGuarantee: { type: 'Number', default: 0 },
      fromTickets: { type: 'Number', default: 0 },
    },
    staffingCosts: {
      _total: { type: 'Number', default: 0 },
      security: { type: 'Number', default: 0 },
      sound: { type: 'Number', default: 0 },
      bar: { type: 'Number', default: 0 },
      promotional: { type: 'Number', default: 0 },
    },
    promotionalSpending: {
      _total: { type: 'Number', default: 0 },
      physical: { type: 'Number', default: 0 },
      social: { type: 'Number', default: 0 },
      local: { type: 'Number', default: 0 },
    },
    otherExpenditure: {
      _total: { type: 'Number', default: 0 },
      fields: [{
        key: { type: 'String' },
        value: { type: 'Number', default: 0 },
      }],
    }
  }
});

export default mongoose.model('Event', eventSchema);
