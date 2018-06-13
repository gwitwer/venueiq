import { ADD_EVENT, ADD_EVENTS, DELETE_EVENT, UPDATE_EVENT, UPDATE_FILTER, CLEAR_FILTER } from './EventActions';

// Initial State
const initialState = {
  filter: '',
  data: [],
};

const EventReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FILTER :
      return {
        ...state,
        filter: action.filter,
      };

    case CLEAR_FILTER :
      return {
        ...state,
        filter: '',
      };

    case ADD_EVENT :
      return {
        ...state,
        data: [action.event, ...state.data],
      };

    case ADD_EVENTS :
      return {
        ...state,
        data: action.events,
      };

    case UPDATE_EVENT: {
      const index = state.data.findIndex(e => e.cuid === action.event.cuid);
      return {
        ...state,
        data: [
          ...state.data.slice(0, index),
          { ...action.event },
          ...state.data.slice(index + 1),
        ],
      };
    }

    case DELETE_EVENT :
      return {
        ...state,
        data: state.data.filter(event => event.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all events
export const getEvents = state => {
  return state.events.data || [];
};

// Get event by cuid
export const getEvent = (state, cuid) => state.events.data.filter(event => event.cuid === cuid)[0];

// Get the active events filter
export const getEventsFilter = state => state.events.filter;

// Export Reducer
export default EventReducer;
