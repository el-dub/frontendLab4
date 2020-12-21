import TemplateProcessor from './templateProcessor.js';
import view from './views/loaderPage.js';

const templateProcessor = new TemplateProcessor();

class Loader{
	showLoader(){
		templateProcessor.render(view.default);
	}
}

export default Loader;