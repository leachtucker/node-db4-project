// Import knex
const knex = require('knex');

// Import knex config file
const config = require('../knexfile');

// Setup database. Call knex with config file's development settings as argument
const db = knex(config.development);

module.exports = db;