import {addToCart, getProductsInCart, clearCart} from './cart.js';

class EventListenersAddder {
    addEventListeners(viewName, products, filter){
    	const addListenersForButtonsInCatalog = (products, categoryId) => {
    		if(categoryId)
				products = products.filter(product => product.categoryId === Number(categoryId));
			let cartSum = document.getElementById('cart_products_quantity');
			products.forEach((product) => {
				let productBt = document.getElementById('btn_product_'+product.id);
				productBt.onclick = () =>{
					cartSum.innerHTML = addToCart(product.id, 1);
				};
			});
    	};
    	const addListenersForProductPage = (products, productUrl) => {
			let product = products.filter(product => product.url === productUrl)[0];
			let plusBt = document.getElementById('plus_product');
			let minusBt = document.getElementById('minus_product');
			let quantity = document.getElementById('product_quantity');
			let productBt = document.getElementById('btn_product_'+product.id);
			plusBt.onclick = () =>{
				quantity.innerHTML = String((Number)(quantity.innerHTML) + 1);
			};
			minusBt.onclick = () =>{
				if((Number)(quantity.innerHTML)>=2)
					quantity.innerHTML = String((Number)(quantity.innerHTML) - 1);
			};
			productBt.onclick = () =>{
				cartSum.innerHTML = addToCart(product.id, (Number)(quantity.innerHTML));
			};
		};

		addEventListeners(viewName, products, filter){
			switch(viewName){
				case 'catalogPage':
					addListenersForButtonsInCatalog(products);
					break;
				case 'categoryProductsPage':
					addListenersForButtonsInCatalog(products, filter);
					break;
				case 'productPage':
					addListenersForProductPage(products, filter);
					break;
				case 'cartPage':
					addListenersForCartPage();
					break;
			}
		}
	}
}

export default EventListenersAddder;

