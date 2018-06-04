import { Router } from 'express';
import authRoutes from  './auth.routes.js';
import userRoutes from './user.routes.js';
import eventRoutes from './event.routes.js';

const api = new Router();
userRoutes(api);
eventRoutes(api);

const auth = new Router();
authRoutes(auth);

export {
  api,
  auth,
};
