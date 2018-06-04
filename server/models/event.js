import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  name: { type: 'String', required: true },
  type: { type: 'String' },
  cuid: { type: 'String', required: true },
  uid: { type: 'String', required: true },
  dateLastUpdated: { type: 'Date', default: Date.now, required: true },
  time: { type: 'Date', required: true },
  tags: { type: ['String'], default: [] },
  revenue: {
    /*
      TODO:
      Refactor this so that *every* subsection is like the "other" subsections.
      Then, initialize each event to have the default subsections and fields displayed here.
      This way, all sections / subsections / fields conform to the same pattern.
      Also: add more properties to the field object.
    */
    barRevenue: {
      _total: { type: 'Number', default: 0 }, // Do we need to make these fields more complex structures? e.g. data format, source, etc.
      beer: { type: 'Number', default: 0 },
      wine: { type: 'Number', default: 0 },
      liquor: { type: 'Number', default: 0 },
    },
    grossedAtDoor: {
      _total: { type: 'Number', default: 0 },
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
  },
  expenditure: {
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
