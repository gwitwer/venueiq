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
  data: [{
    name: { type: 'String' },
    slug: { type: 'String' },
    display: { type: 'String' },
    value: { type: 'Number' },
    fields: [{
      name: { type: 'String' },
      slug: { type: 'String' },
      display: { type: 'String' },
      canAdd: { type: 'Boolean' },
      value: { type: 'Number' }, // for something like genre, the display function would map number to genre.
      fields: [{
        name: { type: 'String' },
        slug: { type: 'String' },
        display: { type: 'String' },
        value: { type: 'Number' },
        source: { type: 'String' }, // Where the data came from.
      }],
    }],
  }],
});

export default mongoose.model('Event', eventSchema);
