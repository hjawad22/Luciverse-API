const environment = process.env.NODE_ENV || 'development';
console.log('NODE_ENV:', environment);
const config = require('./knexfile')[environment];

if (!config) {
  throw new Error(`Knex configuration for environment "${environment}" not found!`);
}

console.log('Using DB config:', config);

const knex = require('knex')(config);

module.exports = knex;