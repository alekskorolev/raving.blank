/*jslint browser: true, devel: true, node: true, nomen: true, es5: true*/
/*global  angular, $ */
var client = require('./client'),

  config = client || {},

  core = {
    sessionkey: 'kdfshgasudfoajsfod8vf76gyo82bu3yfv',
    db: {
      host: 'localhost',
      db: 'raving'
    },
    mode: 'development',
    smtp: {
      username: 'serpteam_test',
      password: '1qaz@WSX3edc',
      host: 'smtp.sendgrid.net',
      ssl: true,
      from: 'dev@serpteam.ru'
    }
  },
  key;

for (key in core) {
  if (core.hasOwnProperty(key)) {
    config.core[key] = core[key];
  }
}

module.exports = config;