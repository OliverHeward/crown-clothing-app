// Takes in existing Cart Items and the new Cart Item to Add
export const addItemToCart = (cartItems, cartItemToAdd) => {
    // if Cart Items find() each individual cart item
    // If return true if cart item id matches new item to add's ID
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    // if true map items and add 1 to quantity of the cartItem
    if (existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            // if false return cart item
            : cartItem
        )
    }
    // if not found in array return new array with existing items
    // on the first time an item is added, it will be set a quantity of 1
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
};

// Takes in the existing cart items and the cart item to remove
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    // If the Cart Item is at quantity 1 -> then remove it
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }  

    // If the cart item is OVER quantity 1 -> then decrease it by 1
    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id ? 
        { ...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );
};