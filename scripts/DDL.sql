
CREATE TABLE users(
	upn text PRIMARY KEY,
	display_name text
);

CREATE TABLE tags(
	id serial PRIMARY KEY,
	name text
);

CREATE TABLE roles(
	id serial PRIMARY KEY,
	name text
);

CREATE TABLE standards(
	id serial PRIMARY KEY,
	name text
);

CREATE TABLE advertisements(
	id serial PRIMARY KEY,
	role_id int REFERENCES roles(id) ON DELETE CASCADE,
	unit text,
	branch text,
	department text,
	description text,
	standard_id int REFERENCES standards(id) ON DELETE CASCADE,
	entry_date Date,
	seniority int,
	is_damach boolean,
	advertiser_upn text REFERENCES users(upn) ON DELETE CASCADE,
	contact text,
	base_location text
);

CREATE TABLE tags_of_adds(
	tag_id int REFERENCES tags(id) ON DELETE CASCADE,
	advertisement_id int REFERENCES advertisements(id) ON DELETE CASCADE,
	PRIMARY KEY(tag_id, advertisement_id)
);

CREATE TABLE favorite_adds_of_users(
	upn text REFERENCES users(upn) ON DELETE CASCADE,
	advertisement_id int REFERENCES advertisements(id) ON DELETE CASCADE,
	PRIMARY KEY(upn, advertisement_id)
);