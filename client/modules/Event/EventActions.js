import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_EVENT = 'ADD_EVENT';
export const ADD_EVENTS = 'ADD_EVENTS';

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
