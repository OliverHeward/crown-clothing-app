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
}