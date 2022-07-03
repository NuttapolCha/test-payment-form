#!/bin/sh
set -e

docker exec -i test-payment-form-postgres psql -U postgres -c "drop database if exists dbtest" &&
docker exec -i test-payment-form-postgres psql -U postgres -c "create database dbtest"
docker exec -i test-payment-form-postgres psql -U postgres -d dbtest -c "create schema if not exists test_payment_form;" &&
docker exec -i test-payment-form-postgres psql -U postgres -d dbtest -c "alter schema test_payment_form owner to postgres;"
