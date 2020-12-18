const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wildgardendb'
})

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected to database");
});

// connection.query(`
// CREATE TABLE IF NOT EXISTS
// CREATE TABLE IF NOT EXISTS
// CREATE TABLE IF NOT EXISTS
// CREATE TABLE IF NOT EXISTS
// CREATE TABLE IF NOT EXISTS

// `)

module.exports = connection;