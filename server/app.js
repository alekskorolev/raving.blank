/*jslint browser: true, devel: true, node: true, nomen: true, es5: true*/
/*global  angular, $ */
var config = require('../config'),
  app;
config.basepath = __dirname;
config.mode = 'dev';
app = require('raving.core')(config);
require('../modules.js')(app);

//app.stop();
//var log = app.get('logger')('main');

