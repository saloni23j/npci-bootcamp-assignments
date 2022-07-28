create database ecommerce;
use ecommerce;
create table Productcategory(
categoryid BIGINT primary key,
categoryname VARCHAR(255)
);
create table Product(
id BIGINT primary key,
sku VARCHAR(255),
name VARCHAR(255),
description VARCHAR(255),
unitprice DECIMAL(13,2),
imageurl VARCHAR(255),
unitsinstock INT,
datecreated DATETIME(6),
lastupdated DATETIME(6),
categoryid BIGINT,
foreign key(categoryid) references Productcategory(categoryid));

insert into Productcategory values(1,"clothing");
insert into Productcategory values(2,"grocery");
insert into Productcategory values(3,"General well-being");

insert into Product values(100,"Clothes", "White Top", "White Cotton Top", 1400,"https://www.amazon.com/Gildan-Womens-Cotton-V-Neck-T-Shirt/dp/B0767V3Q4N/ref=sr_1_4?keywords=white+cotton+tops&qid=1659037930&sr=8-4",10,CURDATE(),curdate(),1);
insert into Product values(101,"Oils", "Olive Oil", "Olive oil for cooking", 345,"https://nymag.com/strategist/article/best-olive-oils-according-to-chefs.html",100,CURDATE(),curdate(),2);
insert into Product values(102,"Tees", "Slim fit tshirt", "Tshirts", 1800,"https://www2.hm.com/en_us/men/products/shirts.html",50,CURDATE(),curdate(),1);
insert into Product values(103,"wellness", "ceptalin", "used to increase immunity", 140,"https://amazon.in/tablets",30,CURDATE(),curdate(),3);