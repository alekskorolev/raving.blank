/*jslint browser: true, devel: true, node: true, nomen: true, es5: true*/
/*global  angular, $ */
var config = {};

config.core = {
  protocol: 'http',
  host: 'localhost',
  port: 8809,
  path: '',
  appid: 'raving',
  theme: 'default'
};

config.build = {
  src: 'source/' + config.core.theme + '/',
  dst: 'www/'
};

config.modules = {};

// default modules configuration
config.modules.profile = {};


module.exports = config;