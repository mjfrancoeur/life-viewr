#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE life_viewr_db;
    GRANT ALL PRIVILEGES ON DATABASE life_viewr_db TO admin;
EOSQL
