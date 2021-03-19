require('babel-register')();

// import jsdom from 'jsdom'; 

var jsdom = require('jsdom');

var exposedProperties = ['window', 'navigator', 'document'];

 
const {JSDOM} = jsdom;  
const {document} = (new JSDOM('<!doctype html><html><body></body></html>',{
  url:"http://localhost" 
})).window;  
global.document = document;  
global.window = document.defaultView;

// global.document = jsdom('<div id="global"></div>');
// global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
