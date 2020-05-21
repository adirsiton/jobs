CREATE SCHEMA jobs;

CREATE TABLE jobs.standards(
	id serial PRIMARY KEY,
	name text
);

CREATE TABLE jobs.roles(
	id serial PRIMARY KEY,
	name text UNIQUE,
	initials text UNIQUE,
	color text
);

CREATE TABLE jobs.qualifications(
	id serial PRIMARY KEY,
	name text UNIQUE
);

CREATE TABLE jobs.units(
	id serial PRIMARY KEY,
	name text UNIQUE -- assuming all unit names in army are unique
);

CREATE TABLE jobs.branches(
	id serial PRIMARY KEY,
	name text,
	unit_id int REFERENCES jobs.units(id) ON DELETE CASCADE,
	UNIQUE (id, unit_id)
);

CREATE TABLE jobs.departments(
	id serial PRIMARY KEY,
	name text,
	branch_id int REFERENCES jobs.branches(id) ON DELETE CASCADE,
	UNIQUE (id, branch_id)
);

CREATE TABLE jobs.base_locations(
	id serial PRIMARY KEY,
	name text
);

CREATE TABLE jobs.users(
	upn text PRIMARY KEY,
	display_name text,
	last_entrance timestamp
);

CREATE TABLE jobs.users_resume(
	upn text PRIMARY KEY REFERENCES jobs.users(upn) ON DELETE CASCADE,
	rank_id int REFERENCES jobs.standards(id) ON DELETE CASCADE,
	qualification_id int REFERENCES jobs.qualifications(id) ON DELETE CASCADE,
	phone_number text,
	free_text text,
	UNIQUE (phone_number)
);

CREATE TABLE jobs.users_desired_roles(
	upn text,
	desired_role_id int REFERENCES jobs.roles(id) ON DELETE CASCADE,
	PRIMARY KEY (upn, desired_role_id)
);

CREATE TABLE jobs.department_head(
	user_id text REFERENCES jobs.users(upn) ON DELETE CASCADE,
	department_id int REFERENCES jobs.departments(id) ON DELETE CASCADE,
	UNIQUE (user_id),
	UNIQUE (department_id)
);

CREATE TABLE jobs.advertisements(
	id serial PRIMARY KEY,
	role_id int REFERENCES jobs.roles(id) ON DELETE CASCADE,
	unit_id int,
	branch_id int,
	department_id int,
	job_title text,
	job_description text,
	entry_date text,
	seniority int,
	is_damach boolean,
	advertiser_upn text REFERENCES jobs.users(upn) ON DELETE CASCADE,
	contact text,
	base_location_id int REFERENCES jobs.base_locations(id) ON DELETE CASCADE,
	is_close boolean DEFAULT false,
	advertisment_date bigint,
	closing_date bigint,
	last_reference_date bigint,
	FOREIGN KEY (branch_id, unit_id) REFERENCES jobs.branches(id, unit_id),
	FOREIGN KEY (department_id, branch_id) REFERENCES jobs.departments(id, branch_id)
);

CREATE TABLE jobs.standards_of_ads(
	standard_id int REFERENCES jobs.standards(id) ON DELETE CASCADE,
	advertisement_id int REFERENCES jobs.advertisements(id) ON DELETE CASCADE,
	PRIMARY KEY(standard_id, advertisement_id)
);

CREATE TABLE jobs.favorite_ads_of_users(
	upn text REFERENCES jobs.users(upn) ON DELETE CASCADE,
	advertisement_id int REFERENCES jobs.advertisements(id) ON DELETE CASCADE,
	PRIMARY KEY(upn, advertisement_id)
);

CREATE TABLE jobs.users_previous_jobs(
	job_name text NOT NULL,
	upn text REFERENCES jobs.users(upn) ON DELETE CASCADE,
	unit_id int REFERENCES jobs.units(id) ON DELETE CASCADE,
	branch_id int REFERENCES jobs.branches(id) ON DELETE CASCADE,
	department_id int REFERENCES jobs.departments(id) ON DELETE CASCADE,
	start_date date,
	end_date date,
	PRIMARY KEY(upn, job_name),
	FOREIGN KEY (branch_id, unit_id) REFERENCES jobs.branches(id, unit_id),
	FOREIGN KEY (department_id, branch_id) REFERENCES jobs.departments(id, branch_id)
);
