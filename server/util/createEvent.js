import Event from '../models/event';
import defaultEventData from './defaultEventData';
import cuid from 'cuid';

const createEvent = ({
  name,
  type,
  uid,
  dateLastUpdated,
  time,
  tags,
  data,
  defaultCuid,
}) => (new Event({
  name,
  type,
  uid,
  dateLastUpdated,
  time,
  tags,
  data: data || defaultEventData.data,
  cuid: defaultCuid || cuid(),
})).save();

export default createEvent;
