CREATE SCHEMA jobs;

CREATE TABLE jobs.users(
	upn text PRIMARY KEY,
	display_name text
);

CREATE TABLE jobs.tags(
	id serial PRIMARY KEY,
	name text
);

CREATE TABLE jobs.roles(
	id serial PRIMARY KEY,
	name text
);

CREATE TABLE jobs.standards(
	id serial PRIMARY KEY,
	name text
);

CREATE TABLE jobs.units(
	id serial PRIMARY KEY,
	name text UNIQUE
);

CREATE TABLE jobs.branches(
	id serial PRIMARY KEY,
	unit_id int REFERENCES jobs.units(id) ON DELETE CASCADE,
	name text UNIQUE,
	UNIQUE (id, unit_id)
);

CREATE TABLE jobs.departments(
	id serial PRIMARY KEY,
	branch_id int REFERENCES jobs.branches(id) ON DELETE CASCADE,
	name text UNIQUE,
	UNIQUE (id, branch_id)
);	

CREATE TABLE jobs.advertisements(
	id serial PRIMARY KEY,
	role_id int,
	unit_id int,
	branch_id int,
	department_id int REFERENCES jobs.departments(id) ON DELETE CASCADE,
	description text,
	entry_date Date,
	seniority int,
	is_damach boolean,
	advertiser_upn text REFERENCES jobs.users(upn) ON DELETE CASCADE,
	contact text,
	base_location text,
	FOREIGN KEY (branch_id, unit_id) REFERENCES jobs.branches (id, unit_id),
	FOREIGN KEY (department_id, branch_id) REFERENCES jobs.departments (id, branch_id)
);

CREATE TABLE jobs.standards_of_ads(
	standard_id int REFERENCES jobs.standards(id) ON DELETE CASCADE,
	advertisement_id int REFERENCES jobs.advertisements(id) ON DELETE CASCADE,
	PRIMARY KEY(standard_id, advertisement_id)
);

CREATE TABLE jobs.tags_of_ads(
	tag_id int REFERENCES jobs.tags(id) ON DELETE CASCADE,
	advertisement_id int REFERENCES jobs.advertisements(id) ON DELETE CASCADE,
	PRIMARY KEY(tag_id, advertisement_id)
);

CREATE TABLE jobs.favorite_ads_of_users(
	upn text REFERENCES jobs.users(upn) ON DELETE CASCADE,
	advertisement_id int REFERENCES jobs.advertisements(id) ON DELETE CASCADE,
	PRIMARY KEY(upn, advertisement_id)
);