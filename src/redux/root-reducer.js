import { combineReducers  } from 'redux';
import { persistReducer } from 'redux-persist';

// This returns the actual localStorage as Storage
import storage from "redux-persist/lib/storage";

import userReducer from './user/reducer';
import cartReducer from './cart/reducer';
import directoryReducer from './directory/reducer';
import shopReducer from './shop/reducer';

// Persist object configuration
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
};

// Root Reducer
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});


export default persistReducer(persistConfig, rootReducer);