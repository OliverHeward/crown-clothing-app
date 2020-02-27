import { userActionTypes } from './types';
// @param {user} Object
// either user Auth or user snapshot object
export const setCurrentUser = user => ({
    // align reducers expectation of action.TYPE
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})