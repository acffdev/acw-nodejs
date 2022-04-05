/**
 * ROUTER
 *
 * @author Antonio Carlos (acffdev@gmail.com)
 * ------------------------------------------------
 * @description 
 * routes server requests
 * ------------------------------------------------
 * @contributors 
 * acwebmaster
 * ------------------------------------------------
*/
'use strict';

// requires
const { root, settings } = require('./config');
const { existsSync, readFile } = require('fs');
const { pathToArray, paths } = require('./utils');
const { Static } = require('./static');

// main function
function Router(req, res) { 
    // assign routes
    const [file = 'index', ...params] = pathToArray(req.url);

    // get controller file
    const controller = paths.controllers(file);

    // check if controller exists
    if (existsSync(controller)) {
        // implements a view render to controller
    	res.render = view => {
        	readFile(paths.views(view), (err, data) => {
        		if (err) res.writeHead(404).end();
        		res.writeHead(200, {'content-type':'text/html'}).end(data);
        	});
        };

        // load controller
        try {
            require(controller)(req, res);
        } catch(err){
            res.writeHead(500).end(`Internal error: ${err}`);
        }
    } else {
        Static(req, res);
    }
};

//exports
module.exports = { Router };
