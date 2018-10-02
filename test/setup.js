import { JSDOM } from 'jsdom'

var setupDOM = function() {
	global.dom = new JSDOM('<body></body>');
	global.document = dom.window.document;
};

setupDOM();

beforeEach(() => {
	global.cleanup = setupDOM
});

afterEach(() => {
	global.cleanup();
});
