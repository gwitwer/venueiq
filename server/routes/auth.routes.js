import * as AuthController from '../controllers/auth.controller';

/**
 * Attach auth routes to router
 * @param router
 * @returns void
 */
const authRoutes = router => {
  router.get('/start', AuthController.getStart);

  router.get('/login', AuthController.getLogin);
  router.post('/login', AuthController.postLogin);

  router.get('/signup', AuthController.getSignup);
  router.post('/signup', AuthController.postSignup);

  router.get('/logout', AuthController.getLogout);

  router.get('/connectPage', AuthController.getConnectPage);

  router.get('/connectAdAccount', AuthController.getConnectAdAccount);

  router.get('/updateUserDataAndRedirect', AuthController.getUpdateUserDataAndRedirect);
};

export default authRoutes;
