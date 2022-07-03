-- test_payment_form.orders definition

-- Drop table

-- DROP TABLE test_payment_form.orders;

CREATE TABLE test_payment_form.orders (
	id serial4 NOT NULL,
	"recommenderEmail" varchar NULL,
	"createdDate" timestamp NOT NULL DEFAULT now(),
	"updatedDate" timestamp NOT NULL DEFAULT now(),
	"customerId" int4 NULL,
	"couponCode" varchar NULL,
	CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY (id)
);


-- test_payment_form.orders foreign keys

ALTER TABLE test_payment_form.orders ADD CONSTRAINT "FK_cd8700988dded63ff38d3df58b2" FOREIGN KEY ("couponCode") REFERENCES test_payment_form.coupons(code);
ALTER TABLE test_payment_form.orders ADD CONSTRAINT "FK_e5de51ca888d8b1f5ac25799dd1" FOREIGN KEY ("customerId") REFERENCES test_payment_form.customers(id);