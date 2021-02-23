const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'ahmed',
  password: 'karirinkute',
  host: 'localhost',
  port: 5432,
  database: 'nomashop',
});

module.exports = pool;
