const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wildgardendb',
    // port: 3306
})

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected to database");

    connection.query(`CREATE TABLE IF NOT EXISTS adminn
    (id_admin INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    admin_lastname VARCHAR(150) NOT NULL, 
    admin_firstname VARCHAR(150) NOT NULL, 
    admin_email VARCHAR(250) NOT NULL, 
    admin_password VARCHAR(250) NOT NULL)`); 

});

module.exports = connection;