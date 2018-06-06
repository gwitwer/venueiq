import Event from '../models/event';
import slugify from 'slugify';
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
  data: data ? data : defaultEventData.data,
  cuid: defaultCuid ? defaultCuid : cuid(),
})).save();

export default createEvent;
