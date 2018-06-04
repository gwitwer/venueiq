/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import app from './modules/App/AppReducer';
import events from './modules/Event/EventReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  events,
});
