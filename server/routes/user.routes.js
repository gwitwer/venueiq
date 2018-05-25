import * as UserController from '../controllers/user.controller';

/**
 * Make routes for user
 * @param router
 * @returns void
 */
const userRoutes = router => {
  // Get active user
  router.get('/user', UserController.getUser);

  // // Get all Users
  // router.get('/users', UserController.getUsers);

  // // Get a particular user by cuid
  // router.get('/users/:cuid', UserController.getUsers);

  // // Add a new User
  // router.post('/users', UserController.addUser);

  // // Delete a user by cuid
  // router.delete('/users/:cuid', UserController.deleteUser);

  // Update a particular user
  router.post('/user/update', UserController.updateUser);
};

export default userRoutes;
