import userActionTypes from "./types";

// Set Initial State
const INITIAL_STATE = {
  currentUser: null
};

// User state set to null while action type is switched
// returns null if DEFAULT
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Shared logic for cases can be stacked like so
    case userActionTypes.SIGN_IN_SUCCESS:
      // Return current state, then pass payload to currentUser state
      return {
        ...state,
        currentUser: action.payload,
        error: null
      };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }
    // Shared logic for cases can be stacked like so
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
        return {
          ...state,
          error: action.payload
        };
      
    default:
      // return current state
      return state;
  }
};

export default userReducer;
