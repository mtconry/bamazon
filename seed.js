var mysql = require('mysql');
var dbConfig = require('./dbConfig.js');

var connection = mysql.createConnection({
    host: dbConfig.host,
	port: dbConfig.port,
	user: dbConfig.user,
	password: dbConfig.password
});

connection.connect(function (err){
    if (err) throw err;
    console.log('Connected!', connection.threadId);
});

connection.query('DROP DATABASE bamazon;', function (err, result){
});

connection.query('CREATE DATABASE bamazon;', function (err, result) {
	if (err) throw err;
    console.log('Database created');
});

var table = 'CREATE TABLE bamazon.products (item_id INT AUTO_INCREMENT, product_name VARCHAR(200) NOT NULL, department_name VARCHAR(200), price DECIMAL(10, 2) NOT NULL, stock_quantity INT(10) NOT NULL, PRIMARY KEY (item_id ));';
connection.query(table, function (err, result) {
	if (err) throw err;
	console.log('Table created');
});

var insert = 'INSERT INTO bamazon.products ( `product_name`, `department_name`, `price`, `stock_quantity` ) VALUES ( "Star Wars Holiday Special on VHS", "Entertainment", 2.00, 345 ), ( "Wool Scarf", "Fashion", 25.00, 3 ), ( "Christmas Sweater", "Fashion", 30.00, 15 ), ( "Cabernet", "Drinks", 7.00, 20 ), ( "5 Gallon Fish Tank", "Pet Products", 60.00, 10 ), ( "27 inch TV", "Electronics", 200.00, 5 ), ( "Phantom 4 Drone", "Electronics", 2000.00, 2 ), ( "Talking Parrot Toy", "Entertainment", 10.00, 17 );'
connection.query(insert, function (err, result) {
	if (err) throw err;
	console.log('Data Seeded');
});

connection.end(function (err) {
	if (err) throw err;
});
