-- test_payment_form.coupons definition

-- Drop table

-- DROP TABLE test_payment_form.coupons;

CREATE TABLE test_payment_form.coupons (
	code varchar NOT NULL,
	discount int4 NOT NULL,
	"isActive" bool NOT NULL,
	"createdDate" timestamp NOT NULL DEFAULT now(),
	"updatedDate" timestamp NOT NULL DEFAULT now(),
	CONSTRAINT "PK_e025109230e82925843f2a14c48" PRIMARY KEY (code)
);