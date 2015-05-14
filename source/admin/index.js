/*jslint browser: true, devel: true, node: true, nomen: true, es5: true*/
/*global  angular, $ */
//building file from front-end of application
var config = require('../../config/client'),
  raving;
config.core.adm = true;
raving = require('raving.core/admin')(config);
require('bootstrap/dist/js/npm');
require('../../custom_modules/bootstrap-snippets')(config);

require('../../modules')(config);
require('./templates');