import { combineReducers  } from 'redux';

import userReducer from './user/reducer';

// combineReducers together
export default combineReducers({
    user: userReducer
});