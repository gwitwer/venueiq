import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_EVENT = 'ADD_EVENT';
export const ADD_EVENTS = 'ADD_EVENTS';
export const DELETE_EVENT = 'DELETE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';

// Export Actions
export function addEvent(event) {
  return {
    type: ADD_EVENT,
    event,
  };
}

export function addEventRequest(event) {
  return dispatch => {
    return callApi('events', 'post', { event }).then(res => dispatch(addEvent(res.event)));
  };
}

export function updateEvent(event) {
  return {
    type: UPDATE_EVENT,
    event,
  };
}

export function updateEventRequest(update) {
  return dispatch => {
    return callApi('events', 'post', { update }).then(res => dispatch(updateEvent(res.event)));
  };
}

export function addEvents(events) {
  return {
    type: ADD_EVENTS,
    events,
  };
}

export function fetchEvents() {
  return dispatch => {
    return callApi('events').then(res => {
      dispatch(addEvents(res.events));
    });
  };
}

export function fetchEvent(cuid) {
  return dispatch => {
    return callApi(`events/${cuid}`).then(res => dispatch(addEvent(res.event)));
  };
}
