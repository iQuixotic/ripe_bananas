CREATE DATABASE ripe_bananas;

create table user_tbl(
	id serial primary key,
	firstname varchar(30) not null,
	lastname varchar(50) not null,
	email varchar(50) not null unique,
	password varchar(255) not null
);

--drop table movie_tbl;
create table movie_tbl(
	id serial primary key,
	title varchar(100) not null,
	rating int not null,
	description text not null,
	year int
);

--drop table review_tbl;
create table review_tbl(
	id serial primary key,
	author int references user_tbl(id) not null,
	rating int not null,
	description text not null,
	date varchar(255) not null,
	movie_id varchar(255) references movie_tbl(id) not null
	
);




-- create table movie_tbl(
-- 	id serial primary key,
-- 	title varchar(100) not null,
-- 	rating int not null,
-- 	description text not null,
-- 	year int
-- );

-- create table review_tbl(
-- 	id serial primary key,
-- 	author int references user_tbl(id) not null,
-- 	rating int not null,
-- 	description text not null,
-- 	date varchar(255) not null,
-- 	movie_id int references movie_tbl(id) not null
-- );