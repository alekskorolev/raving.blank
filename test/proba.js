/*jslint browser: true, devel: true, node: true, nomen: true, es5: true*/
/*global  angular, $, describe, it, after */
var config = require('../config'),
  app,
  coreTest;
config.basepath = __dirname;
config.mode = 'dev';
config.core.port = 12880;
app = require('raving.core')(config);

coreTest = require('raving.core/test');

require('../modules.js')(app);

describe('Server tests', function () {
  "use strict";
  coreTest(app);
/*  after(function () {
    app.stop();
  });*/
});


