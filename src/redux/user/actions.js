// @param {user} Object
// either user Auth or user snapshot object
export const setCurrentUser = user => ({
    // align reducers expectation of action.TYPE
    type: 'SET_CURRENT_USER',
    payload: user
})