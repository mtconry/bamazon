CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INT AUTO_INCREMENT, 
    productname VARCHAR(200) NOT NULL,
    department_name VARCHAR(200),
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (
    'product name',
    'department_name',
    'price',
    'stock_quantity'
)

VALUES(
    "Ring Alarm", "House Hold Items", 159.00, 25
), (
    "Landscape Lights", "Outdoor Living", 63.99, 100
), (
    "Bose Quiet Comfort Headphones", "Electronics", 249.00, 15
), (
    "Suckers", "Movies", 28.95, 5
), (
    "Tetra 20 Gallon Complete Aquarium Kit w/Filter Heater LED & Plants", "Pet Supplies", 99.35, 12
), (
    "Zinus Olivia Metal and Wood Platform Bed with Wood Slat Support, Queen", "Furniture", 159.99, 10
), (
    "Dorman 667-203 Turbocharger", "Automotive", 462.49, 150
), (
    "Apple iPhone X (64GB) - Silver [Locked to Simple Mobile Prepaid]", "Electronics", 899.00, 50
);

