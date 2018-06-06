import Event from '../models/event';
import slugify from 'slugify';
import { data } from './defaultEventData';
import cuid from 'cuid';

const createEvent = ({
  name,
  type,
  uid,
  dateLastUpdated,
  time,
  tags,
}) => (new Event({
  name,
  type,
  uid,
  dateLastUpdated,
  time,
  tags,
  cuid,
  data,
}));
