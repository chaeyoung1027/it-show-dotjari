const mysql = require('mysql');
 
const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'mirim',
    database : 'DotJari'
});
 
module.exports = db;