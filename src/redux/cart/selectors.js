import { createSelector } from 'reselect';

// Pull cart in from state
// Prevent state updates mapping components that don't need to re-render/map
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity,
        0
      )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce(
        (accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity * cartItem.price,
        0
    )  
);