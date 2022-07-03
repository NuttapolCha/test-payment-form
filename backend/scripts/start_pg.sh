#!/bin/sh

docker run --rm -d -p 5432:5432 -e TZ=Asia/Bangkok -e POSTGRES_PASSWORD=postgres --name test-payment-form-postgres postgres:12-alpine