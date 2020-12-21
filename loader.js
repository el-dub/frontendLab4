import TemplateProcessor from './templateProcessor.js';
import LoaderPage from './views/loaderPage.js';

const templateProcessor = new TemplateProcessor();

class Loader{
	showLoader(){
		let view = LoaderPage.default;
		templateProcessor.render(view());
	}
}

export default Loader;