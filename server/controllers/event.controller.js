import Event from '../models/event';


/**
 * Get all events
 * @param req
 * @param res
 * @returns void
 */
export function getEvents(req, res) {
  const uid = process.env.NODE_ENV === 'production'
    ? req.session.user.cuid
    : '1';
  const findEvents = Event.find({ uid }).exec();
  findEvents.then(events => res.json({ events })).catch(err => res.json({ err }));
}

/**
 * Get event
 * @param req
 * @param res
 * @returns void
 */
export function getEvent(req, res) {
  const { cuid } = req.params;
  const findEvent = Event.findOne({ cuid }).exec();
  findEvent.then(event => res.json({ event })).catch(err => res.json({ err }));
}

/**
 * Update an event
 * @param req
 * @param res
 * @returns void
 */
export function updateEvent(req, res) {
  const { cuid } = req.params;

  Event.findOneAndUpdate({ cuid }, req.body, function(err, doc) {
    res.status(200).send({ success: !err, err });
  });
}
