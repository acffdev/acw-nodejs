/**
 * ENTRY POINT
 *
 * @author Antonio Carlos (acffdev@gmail.com)
 * ------------------------------------------------
 * @description 
 * entry point file
 * ------------------------------------------------
 * @contributors 
 * acwebmaster
 * ------------------------------------------------
*/
'use strict';

// get config settings 
const { settings } = require('./lib/config');
const { server } = require('./lib/server');

// app init
const app = {
	// settings overrider
	set: (key, value) => settings[key] = value,

	// starts server
	run: () => {
		return server.listen(settings.port, () => {
			console.log(`> Server online: ${settings.protocol}://localhost:${settings.port}`);
		});
	}
};

//exports
module.exports = app;
