export function addToCart(productId, quantity){
    const cart = (localStorage.getItem('cart')) ? JSON.parse(window.localStorage.getItem('cart')) : {};
    cart[productId] = quantity;
    window.localStorage.setItem('cart', JSON.stringify(cart));
    return sum = () => {
        let sum = 0;
        for(key : cart){
            sum+=cart[key];
        }
    }
}
export function getProductsInCart(products){
    const cart = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : {};
    if(Object.keys(cart).length!==0) return products.filter(product => String(product.id) in cart).map(product => product[quantity] = cart[product.id]);
    else return null;
}
export function clearCart(){
    localStorage.clear();
}