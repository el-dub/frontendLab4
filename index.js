'use strict';
import TemplateProcessor from './templateProcessor.js';
import Client from './client.js';
import Router from './router.js';

const router = new Router();
const templateProcessor = new TemplateProcessor();
const client = new Client();

window.onhashchange = () => {
    let { viewName, endpointName, filterName } = router.getCurrentState();
    let view;
	import(`./views/${viewName}.js`)
	    .then((viewModule) =>  {
	        view = viewModule.default;
	        return client.getData(endpointName);
	    },
	    .then((viewModule) =>  {
	        view = viewModule.default;
	        return null;
	    }
	    )
	    .then((data) => {
	        templateProcessor.render(view(data, filterName));
	    });
};



