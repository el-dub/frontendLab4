'use strict';
import TemplateProcessor from './templateProcessor.js';
import Client from './client.js';
import Router from './router.js';
import Loader from './loader.js';

const router = new Router();
const templateProcessor = new TemplateProcessor();
const client = new Client();
const loader = new Loader();

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
	        templateProcessor.render(view(data, filterId, filterName));
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
	        templateProcessor.render(view(data, filterId, filterName));
	    });
};



