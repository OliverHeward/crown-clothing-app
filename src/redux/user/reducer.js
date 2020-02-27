// Set Initial State
const INITIAL_STATE = {
    currentUser: null
}

// User state set to null while action type is switched
// returns null if DEFAULT
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            // Return current state, then pass payload to currentUser state
            return {
                ...state,
                currentUser: action.payload
            }
        default: 
            // return current state
            return state;
    }
}

export default userReducer;