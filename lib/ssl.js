/**
 * SSL 
 *
 * @author Antonio Carlos (acffdev@gmail.com)
 * ------------------------------------------------
 * @description 
 * gets ssl certificates
 * ------------------------------------------------
 * @contributors 
 * acwebmaster
 * ------------------------------------------------
*/
'use strict';

// get config settings
const { settings } = require('./config');

// node
const { readFileSync } = require('fs');

// certificates
const ssl = {
    key: (settings.ssl.key != '') ? readFileSync(settings.ssl.key) : '',
    cert: (settings.ssl.cert != '') ? readFileSync(settings.ssl.cert) : ''
}

// exports
module.exports = { ssl }
