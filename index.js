import TemplateProcessor from './templateProcessor.js';
import Client from './client.js';
import Router from './router.js';
import Loader from './loader.js';
import {getProductsInCart} from './cart.js';
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
	        if(viewName==='cartPage') templateProcessor.render(view(getProductsInCart(data), filterId, filterName));
	    	else templateProcessor.render(view(data, filterId, filterName));
	        
	    })
	    .then({
	    	eventsAddder.addEventListeners(viewName, data, filterId);
	    });
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
	    	if(viewName==='cartPage') templateProcessor.render(view(getProductsInCart(data), filterId, filterName));
	    	else templateProcessor.render(view(data, filterId, filterName));
	        return data;
	        //eventsAddder.addEventListeners(viewName, data, filterId);
	    })
	    .then((data) => {
	    	eventsAddder.addEventListeners(viewName, data, filterId);
	    });
};




