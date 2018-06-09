import callApi from '../../util/apiCaller';

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
    return callApi('user').then(res => {
      console.log(res);
      dispatch(setUser(res.user))
    });
  };
}
