import { combineReducers  } from 'redux';

import userReducer from './user/reducer';
import cartReducer from './cart/reducer';
// combineReducers together
export default combineReducers({
    user: userReducer,
    cart: cartReducer
});