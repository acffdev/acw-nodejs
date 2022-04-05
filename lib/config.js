/**
 * CONFIG
 *
 * @author Antonio Carlos (acffdev@gmail.com)
 * ------------------------------------------------
 * @description 
 * default settings
 * ------------------------------------------------
 * @contributors 
 * acwebmaster
 * ------------------------------------------------
*/
'use strict';

// root directory
const root = process.cwd();

// app settings
const settings = {
    protocol: 'http',
    port: 3000,
    static: 'public',
    controllers: 'src/controllers',
    views: 'src/views',
    viewEngine: '.html',
    ssl: {
        key:'',
        cert:''
    }
};

// exports
module.exports = { root, settings };
