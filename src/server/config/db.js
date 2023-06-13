const mysql = require('mysql');
 
const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'board_sample'
});
 
module.exports = db;