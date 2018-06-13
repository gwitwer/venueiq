import User from '../models/user';

/**
 * Get active user
 * @param req
 * @param res
 * @returns void
 */
export function getUser(req, res) {
  res.json({ user: req.session.user });
}

export function updateUser(req, res) {
  if (req.session.user) {
    User.findOneAndUpdate({ cuid: req.session.user.cuid }, req.body, (err, user) => {
      if (err) {
        console.log(err); // eslint-disable-line no-console
      }
      res.status(200).send({ success: !err, err, user });
    });
  } else {
    res.status(200).send({ err: 'Authorization error. Please log in again to continue.' });
  }
}
