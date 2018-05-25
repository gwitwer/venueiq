// Export Constants
export const SET_USER = 'SET_USER';

export function setUser(user) {
  return {
    type: SET_USER,
    user,
  };
}

export function fetchUser() {
  return dispatch => {
    return callApi(`users/active`).then(res => dispatch(setUser(res.user)));
  };
}
