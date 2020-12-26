import {addToCart, getProductsInCart, clearCart, getSum, removeFromCart, getCart} from './cart.js';
import Client from './client.js';
import Loader from './loader.js';
import TemplateProcessor from './templateProcessor.js';
import errorView from './views/errorPage.js';
import orderInfoView from './views/orderInfoPage.js';

class EventListenersAddder {
    addEventListeners(viewName, products, filter){
    	/*const addListenersForButtonsInCatalog = (products, categoryId) => {
    		if(categoryId)
				products = products.filter(product => product.categoryId === Number(categoryId));
			let cartSum = document.getElementById('cart_products_quantity');
			products.forEach((product) => {
				let productBt = document.getElementById('btn_product_'+product.id);
				productBt.onclick = () =>{
					cartSum.innerHTML = addToCart(product.id, 1);
					event.stopPropagation()
				};
			});
    	};*/
    	const addListenersForProductPage = (products, productUrl) => {
			let product = products.filter(product => product.url === productUrl)[0];
			let plusBt = document.getElementById('plus_product');
			let minusBt = document.getElementById('minus_product');
			let quantity = document.getElementById('product_quantity');
			let productBt = document.getElementById('btn_product_'+product.id);
			let cartSum = document.getElementById('cart_products_quantity');
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
		
		const addListenersForCartPage = (products) => {
			let cartSum = document.getElementById('cart_products_quantity');
			let orderSum = document.getElementById('order_sum');
			if(products){
				products.forEach((product) => {
					let removeBt = document.getElementById('remove_bt_'+product.id);
					removeBt.onclick = () =>{
						removeBt.parentElement.remove();
						cartSum.innerHTML = removeFromCart(product.id);
						orderSum.innerHTML = getSum(getProductsInCart(products)).toFixed(2);
					};
				});
				let orderBt = document.getElementById('btn_order');
				orderBt.onclick = () => {
					window.location.hash = 'order';
				};
			}
			
		}
		const addListenersForOrderPage = (products) => {
			let btnOrder = document.getElementById('btn_form_order');
			btnOrder.onclick = () => {
				const client = new Client();
				const loader = new Loader();
				let data = {
					name: document.getElementById('inputName').value,
					phone: document.getElementById('inputPhone').value,
					email: document.getElementById('inputEmail').value,
					city: document.getElementById('inputCity').value,
					street: document.getElementById('inputStreet').value,
					house: document.getElementById('inputHouse').value,
					flat: document.getElementById('inputFlat').value,
					entrance: document.getElementById('inputEntrance').value,
					date: document.getElementById('inputDate').value,
					time: document.getElementById('inputTime').value,
					cost: getSum(getProductsInCart(products)).toFixed(2)
				};
				loader.showLoader();
				const templateProcessor = new TemplateProcessor();
				client.postOrder('orders', data)
					.then(order => {
						window.location.hash=`order/${order['id']}`;
						templateProcessor.render(orderInfoView(order));
			           
			        }).catch(error => {
			        	
			        	templateProcessor.render(errorView(error));
			        });
			    clearCart();
			    let cartSum = document.getElementById('cart_products_quantity');
				cartSum.innerHTML = getCart();
			};

			
		}

		switch(viewName){
			case 'catalogPage':
				//addListenersForButtonsInCatalog(products);
				break;
			case 'categoryProductsPage':
				//addListenersForButtonsInCatalog(products, filter);
				break;
			case 'productPage':
				addListenersForProductPage(products, filter);
				break;
			case 'cartPage':
				addListenersForCartPage(products);
				break;
			case 'orderPage':
				addListenersForOrderPage(products);
				break;
		}
	}
}

export default EventListenersAddder;

