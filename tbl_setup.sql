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
	poster varchar(255) primary key,
	title varchar(100) not null,
	genre varchar(30) not null,
	description text not null,
	numrating int not null,
	rating decimal
);

--drop table review_tbl;
create table review_tbl(
	id serial primary key,
	author int references user_tbl(id) not null,
	rating int not null,
	description text not null,
	date Date not null,
	poster varchar(255) references movie_tbl(poster)
);