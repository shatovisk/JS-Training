const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "asd",
    host: "localhost",
    port: 0000,
    database: "node_postgres"
})






module.exports = pool