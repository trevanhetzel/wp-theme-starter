/**
 * Entry file
 */

import 'picturefill';
import webFont from 'webfontloader';
import exampleModule from './module/example-module';

webFont.load({
	google: {
		families: [
			'Droid Serif:400'
		]
	}
});

exampleModule.init();
