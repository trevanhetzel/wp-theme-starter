'use strict';

/**
 * Picturefill
 */
require('picturefill');

/**
 * Web font loader.
 */
var webFont = require('webfontloader');

WebFont.load({
	google: {
		families: [
			'Droid Serif:400',
			'Droid Serif:400italic',
			'Droid Serif:700',
			'Lato:400',
			'Lato:700'
		]
	}
});

/**
 * Example module.
 * @see module:exampleModule
 */
var mainNav = require('./module/example-module').init();
