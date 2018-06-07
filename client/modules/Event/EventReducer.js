import { ADD_EVENT, ADD_EVENTS, DELETE_EVENT, UPDATE_EVENT } from './EventActions';

// Initial State
const initialState = { data: [] };

const EventReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENT :
      return {
        data: [action.event, ...state.data],
      };

    case ADD_EVENTS :
      return {
        data: action.events,
      };

    case UPDATE_EVENT: {
      const index = state.data.findIndex(e => e.cuid === action.event.cuid);
      return {
        data: [
          ...state.data.slice(0, index),
          { ...action.event },
          ...state.data.slice(index + 1),
        ],
      };
    }
    case DELETE_EVENT :
      return {
        data: state.data.filter(event => event.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all events
export const getEvents = state => state.events.data;

// Get event by cuid
export const getEvent = (state, cuid) => state.events.data.filter(event => event.cuid === cuid)[0];

// Export Reducer
export default EventReducer;
