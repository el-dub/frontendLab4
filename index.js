import TemplateProcessor from './templateProcessor.js';
import Client from './client.js';
import Router from './router.js';
import Loader from './loader.js';
import {getProductsInCart, getCart} from './cart.js';
import EventListenersAddder from './eventListeners.js';

const router = new Router();
const templateProcessor = new TemplateProcessor();
const client = new Client();
const loader = new Loader();
const eventsAddder = new EventListenersAddder();

window.onload = () => {
	let { viewName, endpointName, filterId, filterName } = router.getCurrentState();
    let view;
    loader.showLoader();
    import(`./views/${viewName}.js`)
	    .then((viewModule) =>  {
	        view = viewModule.default;
	        if(endpointName!=='') return client.getData(endpointName);
	        else return null;
	    })
	    .then((data) => {
	        if(viewName==='cartPage'||viewName==='orderPage') data = getProductsInCart(data);
	        templateProcessor.render(view(data, filterId, filterName));
	        eventsAddder.addEventListeners(viewName, data, filterId);
	    });
	let cartSum = document.getElementById('cart_products_quantity');
	cartSum.innerHTML = getCart();
}

window.onhashchange = () => {
    let { viewName, endpointName, filterId, filterName } = router.getCurrentState();
    let view;
    loader.showLoader();
	import(`./views/${viewName}.js`)
	    .then((viewModule) =>  {
	        view = viewModule.default;
	        if(endpointName!=='') return client.getData(endpointName);
	        else return null;
	    })
	    .then((data) => {
	    	if(viewName==='cartPage'||viewName==='orderPage') data = getProductsInCart(data);
	        templateProcessor.render(view(data, filterId, filterName));
	        eventsAddder.addEventListeners(viewName, data, filterId);
	    });
};




