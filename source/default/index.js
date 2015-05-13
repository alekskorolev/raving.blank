/*jslint browser: true, devel: true, node: true, nomen: true, es5: true*/
/*global  angular, $ */
//building file from front-end of application
var config = require('../../config/client'),
  raving;
config.core.adm = false;
raving = require('raving.core/client')(config);
require('bootstrap/dist/js/npm');
require('../../custom_modules/bootstrap-snippets')(config);
require('../../modules')(config, 'client');
require('./templates');