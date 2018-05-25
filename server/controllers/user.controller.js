import User from '../models/user';
import cuid from 'cuid';
// import slug from 'limax';

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
  User.findOneAndUpdate({ cuid: req.session.user.cuid }, req.body, function(err, doc) {
    if (err) {
      console.log(err);
    }
    res.status(200).send({ success: !err, err });
  });
}
