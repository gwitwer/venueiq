/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import events from './modules/Event/EventReducer';
import user from './modules/User/UserReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  events,
  user,
});
