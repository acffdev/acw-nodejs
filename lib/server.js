/**
 * SERVER
 *
 * @author Antonio Carlos (acffdev@gmail.com)
 * ------------------------------------------------
 * @description 
 * creates http/https server
 * ------------------------------------------------
 * @contributors 
 * acwebmaster
 * ------------------------------------------------
*/
'use strict';

// requires
const { settings } = require('./config');
const { Router } = require('./router');
const { ssl } = require('./ssl');
const protocol = require(settings.protocol);

// creates server
const server = protocol.createServer(ssl, Router);

// exports
module.exports = { server };
