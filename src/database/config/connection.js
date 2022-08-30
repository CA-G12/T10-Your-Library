const { Pool } = require('pg');
require('dotenv')('.env');

const {NODE_ENV, DATABASE_URL, DB_URL, BD_TEST_URL} = process.env;

let db_url = '';
let ssl = false;

switch(NODE_ENV){
    case 'dev':
       db_url =  DB_URL;
        break;
    case 'tes':
        db_url = BD_test;
        break;
    case 'production':
        db_url =DATABASE_URL;
        ssl = {rejectUnauthorized : false};
    break;

    default:
        throw new Error('invalid db url');
}
const connection = new Pool({
    connectionString :  db_url,
    ssl: ssl
})

module.exports = connection;
