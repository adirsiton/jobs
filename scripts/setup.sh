#! /bin/bash

set -e

export PGCLIENTENCODING=utf-8


PG_USERNAME=${PG_USERNAME:-postgres}
PG_HOST=${PG_HOST:-localhost}
PG_DB=${PG_DB:-jobs}

PGPASSWORD=$PG_PASSWORD dropdb --if-exists --host=$PG_HOST --username=$PG_USERNAME -w $PG_DB

PGPASSWORD=$PG_PASSWORD createdb --host=$PG_HOST --username=$PG_USERNAME -w $PG_DB

PGPASSWORD=$PG_PASSWORD psql --host=$PG_HOST --username=$PG_USERNAME -w $PG_DB <<EOF
BEGIN;

\i DDL.sql

COMMIT;

EOF