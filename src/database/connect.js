const knex = require('knex');

const config = require('../../knexfile.js');

const connect = knex(config.development);

module.exports = connect;
 