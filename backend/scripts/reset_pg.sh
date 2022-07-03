#!/bin/sh
set -e

docker exec -i test-payment-form-postgres psql -U postgres -c "drop database if exists dbtest" &&
docker exec -i test-payment-form-postgres psql -U postgres -c "create database dbtest"
docker exec -i test-payment-form-postgres psql -U postgres -d dbtest -c "create schema if not exists test_payment_form;" &&
docker exec -i test-payment-form-postgres psql -U postgres -d dbtest -c "alter schema test_payment_form owner to postgres;"

cat ./backend/src/db/sql/0001_create_table_coupons.sql | docker exec -i test-payment-form-postgres psql -U postgres -d dbtest
cat ./backend/src/db/sql/0002_create_table_customers.sql | docker exec -i test-payment-form-postgres psql -U postgres -d dbtest
cat ./backend/src/db/sql/0003_create_table_orders.sql | docker exec -i test-payment-form-postgres psql -U postgres -d dbtest
cat ./backend/src/db/sql/0004_insert_initial_data.sql | docker exec -i test-payment-form-postgres psql -U postgres -d dbtest