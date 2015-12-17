
'use strict';

/**
 * Module dependencies.
 * @private
 */
 const _ = require('lodash'),
  dargs = require('dargs'),
  shell = require('shelljs');


// Load Config
const config = require('./config');

// Load Args
const args = dargs(config.args);
const cmd = 'youtube-dl '.concat(args.join(' '));


// Download each URL
_.forEach(config.urls, function(url) {
  // Run the command
  shell.exec(`${cmd} ${url}`)
});
