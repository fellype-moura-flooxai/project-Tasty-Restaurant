const mysql = require ('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    database: 'saboroso',
    password: '1234'

});

    module.exports = connection;