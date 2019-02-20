# bamazon

## Description

This application uses a simple command line based storefront using the npm [Inquirer](https://www.npmjs.com/package/inquirer) package and the MySQL database backend together with the npm [mysql](https://www.npmjs.com/package/mysql) package. 

### MySQL Database Setup

In order to run this application, you should have the MySQL database already set up on you machine. If you don't visit the [MySQL installation page](https://dev.mysql.com/doc/refman/5.6/en/installing.html) to install the version you need for your operating system. Once you have MySQL installed, you will be able to create the *Bamazon* database and the *products* table with the SQL code found in [Bamazon.sql](bamazon.sql). Run this code inside you MySQL client like [Sequel PRO](https://www.sequelpro.com/) to populate the database, then you will be ready to proceed with running the Bamazon customer interface.

### Customer interface
The customer interface allows the user to view the current inventory of the store items: Item ID's, decriptions, department in which the item is located and price. The user is then able to purchase one of the existing items by entereing the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order. 

To run the customer interface please follow the steps below:
    git clone git@github.com:mtconry/bamazon.git
    cd bamazon
    npm install 
    node main.js