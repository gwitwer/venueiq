// Initial State
const initialState = {
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/* Selectors */

// Get user by cuid
export const getUser = state => state.user;

// Export Reducer
export default UserReducer;
