import CartActionTypes from './types';
import { addItemToCart } from './utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                // switch hidden true or false
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM: 
            return {
                ...state,
                // pass item to util function, pass existing cart items & payload
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
            default:
                return state
    }
}

export default cartReducer;