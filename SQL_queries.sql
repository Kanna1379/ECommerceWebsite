create database ECommerce;
use ECommerce;
create table Product(pid BIGINT primary key,
sku VARCHAR(255),
name VARCHAR(255),
description VARCHAR(255),
unitprice DECIMAL(13,2),
imageurl VARCHAR(255),
activebit int,
unitsinstock INT,
datecreated DATETIME(6),
lastupdated DATETIME(6),
categoryid BIGINT,
foreign key(categoryid) references ProductCategory(categoryid));
create table ProductCategory(categoryid BIGINT primary key, categoryname VARCHAR(255));

insert into ProductCategory values(101,"food");
insert into ProductCategory values(102,"electronics");
insert into ProductCategory values(103,"groceries");

insert into Product values(1,"010000","chocolate","ingredients: caramel and choco",50.0,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcgWhNlW2vXyKi3t6bzRkeZPtc0p6adeEO2Q&usqp=CAU",2,5,'2022-02-07 09:10:33','2008-11-09 09:10:33',101);
insert into Product values(2,"020000","rice","quality rice",150.0,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQItGtDjVjQu_Xc6n7qWzhDWskDNgA-yc_MHWV-RWkCth_T-paXMzET53_2jICX3jj44Xw&usqp=CAU",1,3,'2022-03-27 12:10:10','2021-11-09 09:10:33',101);
insert into Product values(3,"030000","tv","panasonic",25000,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6YvbuwEm_1lAD8Oc_uqQeQIrw5vnI2k-5mw&usqp=CAU",4,5,'2022-05-20 15:10:03','2022-01-09 09:23:30',102);
insert into Product values(4,"040000","soap","sandalwood",30.0,"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSyjhHaoVn_ouSviB-D1gjrfmwoPEezCx_lrdIpQ_4AVN7UM-uQfGzEg09DD0qdWzQHrUNjJIgUkw&usqp=CAc",2,5,'2020-02-04 08:06:08','2018-11-20 09:10:33',103);
