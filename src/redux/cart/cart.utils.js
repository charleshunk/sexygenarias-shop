export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        console.log('Exists!');
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
            );
    }
    console.log("Doesn't exist!");
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}