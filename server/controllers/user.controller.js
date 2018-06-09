import User from '../models/user';

/**
 * Get active user
 * @param req
 * @param res
 * @returns void
 */
export function getUser(req, res) {
  console.log('HERE!', req.session.user);
  res.json({ user: req.session.user });
}

export function updateUser(req, res) {
  User.findOneAndUpdate({ cuid: req.session.user.cuid }, req.body, (err, user) => {
    if (err) {
      console.log(err); // eslint-disable-line no-console
    }
    res.status(200).send({ success: !err, err, user });
  });
}
