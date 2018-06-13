import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_EVENT = 'ADD_EVENT';
export const ADD_EVENTS = 'ADD_EVENTS';
export const DELETE_EVENT = 'DELETE_EVENT';
export const UPDATE_EVENT = 'UPDATE_EVENT';
export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';

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

export function updateEventRequest(uid, cuid, update) {
  return dispatch => {
    return callApi(`events/${uid}/${cuid}`, 'post', { update }).then(res => dispatch(updateEvent(res.event)));
  };
}

export function addEvents(events) {
  return {
    type: ADD_EVENTS,
    events,
  };
}

export function clearFilter() {
  return {
    type: CLEAR_FILTER,
  };
}

export function updateFilter(filter) {
  return {
    type: UPDATE_FILTER,
    filter,
  };
}

export function fetchEvents(uid) {
  return dispatch => {
    return callApi(`events/${uid}`).then(res => {
      dispatch(addEvents(res.events));
    });
  };
}

export function fetchEvent(uid, cuid) {
  return dispatch => {
    return callApi(`events/${uid}/${cuid}`).then(res => dispatch(addEvent(res.event)));
  };
}
