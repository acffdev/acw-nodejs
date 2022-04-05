/**
 * UTILS
 *
 * @author Antonio Carlos (acffdev@gmail.com)
 * ------------------------------------------------
 * @description 
 * pending ...
 * ------------------------------------------------
 * @contributors 
 * acwebmaster
 * ------------------------------------------------
*/
'use strict';

// requires
const { root, settings } = require('./config');
const { join } = require('path');

// assoc url path to array
const pathToArray = url => url.split('/').filter(String);

// paths
const paths = {
    // controllers path
    controllers: file => join(root, settings.controllers, file + '.js'),

    // views path
    views: file => join(root, settings.views, file + settings.viewEngine),

    // static path
    static: file => join(root, settings.static, file)
};

// exports
module.exports = { pathToArray, paths };
