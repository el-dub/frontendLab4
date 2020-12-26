export function addToCart(productId, quantity){
    const cart = (localStorage.getItem('cart')) ? JSON.parse(window.localStorage.getItem('cart')) : {};
    cart[productId] = quantity;
    window.localStorage.setItem('cart', JSON.stringify(cart));
    let sum = 0;
    let values = Object.values(cart);
    for(let value of values){
        sum+=value;
    }
    return sum;
}
export function getCart(){
    const cart = (localStorage.getItem('cart')) ? JSON.parse(window.localStorage.getItem('cart')) : {};
    let sum = 0;
    let values = Object.values(cart);
    for(let value of values){
        sum+=value;
    }
    return sum;
}
export function getProductsInCart(products){
    const cart = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : {};
    if(Object.keys(cart).length!==0) {
        let productsInCart = products.filter(product => String(product.id) in cart);
        for(let product of productsInCart){
            product.quantity = cart[product.id];
        }
        return productsInCart;
    }
    else return null;
}
export function clearCart(){
    localStorage.clear();
}
export function getSum(productsInCart){
    if(productsInCart){
        let sum = 0;
        productsInCart.forEach((product) => sum+=(product.quantity*product.price));
        return sum;
    }
    else return 0;
    
}
export function removeFromCart(productId){
    const cart = (localStorage.getItem('cart')) ? JSON.parse(window.localStorage.getItem('cart')) : {};
    delete cart[productId];
    window.localStorage.setItem('cart', JSON.stringify(cart));
    let sum = 0;
    let values = Object.values(cart);
    for(let value of values){
        sum+=value;
    }
    return sum;
}