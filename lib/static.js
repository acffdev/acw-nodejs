/**
 * STATIC
 *
 * @author Antonio Carlos (acffdev@gmail.com)
 * ------------------------------------------------
 * @description 
 * provides public static assets
 * ------------------------------------------------
 * @contributors 
 * acwebmaster
 * ------------------------------------------------
*/
'use strict';

// requires
const { root, settings } = require('./config');
const { readFile } =  require('fs');
const { extname } = require('path');
const { paths } = require('./utils');

// extensions javascrpt
const ext = ['.js', '.mjs', 'jsx'];

// main function
function Static(req, res) {
    // filepath
    const file = paths.static(req.url);

    // readfile
    readFile(file, (err, data) => {
        // if doesnt exists
        if (err) 
            res.writeHead(404).end();

        // if is js file will set content-type header
        if (ext.includes(extname(file))) 
            res.setHeader('content-type', 'text/javascript');

        // response
        res.end(data);
    });
};

// exports 
module.exports = { Static };
