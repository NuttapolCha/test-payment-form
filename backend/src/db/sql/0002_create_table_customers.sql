-- test_payment_form.customers definition

-- Drop table

-- DROP TABLE test_payment_form.customers;

CREATE TABLE test_payment_form.customers (
	id serial4 NOT NULL,
	"firstName" varchar NOT NULL,
	"lastName" varchar NOT NULL,
	email varchar NOT NULL,
	"phoneNo" varchar NOT NULL,
	"createdDate" timestamp NOT NULL DEFAULT now(),
	"updatedDate" timestamp NOT NULL DEFAULT now(),
	CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY (id)
);