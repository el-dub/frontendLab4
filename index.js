'use strict';
import TemplateProcessor from './templateProcessor.js';
import Client from './client.js';
import Router from './router.js';

const router = new Router();
const templateProcessor = new TemplateProcessor();
const client = new Client();

window.onhashchange = () => {
    let { viewName, endpointName, filterName, filterEndpointName } = router.getCurrentState();
    let view;
	import(`./views/${viewName}.js`)
	    .then((viewModule) =>  {
	        view = viewModule.default;
	        return [client.getData(endpointName), client.getData(filterEndpointName)]
	    },
	    (viewModule) =>  {
	        view = viewModule.default;
	        return client.getData(endpointName)
	    })
	    .then((data) => {
	        templateProcessor.render(view(data[0], filterName, data[1]));
	    },
	    (data) => {
	        templateProcessor.render(view(data));
	    }
	    );
};



