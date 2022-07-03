# test-payment-form

This is an assignment for an interview process of Caliber.

[Instruction](#instruction)
[Solution](#solution)

## Instruction

### Deliverables: Source Code on Github (or other Git hosting)

### Deadline: 8 July 2022 at 18:00 (1 week)

### Requirements

Develop Web App for Ecommerce & E-Receipt Feature.

Just mocking that the user buys the product, doesn’t need to connect to the payment gateway to charge the user.

User need to submit these information to checkout;

- Firstname
- Last Name
- Email
- Phone Number
- Coupon Code
- Credit Card Info
- Credit Card Number
- Expire Date
- CVV

The App should have data validation if user input the form incorrectly.

The user submitted data will have to stored in DB (everything except Credit Card Info).

The user will receive an E-Receipt to his/her email with the payment date and the data stored in the DB.

[Reference](https://checkout.cariber.co/add-sku-634cac96-9b75-41d0-8605-f902cde1566f/?cpc=career92)

### Tech Stack

- Next.js (Frontend React.js Framework) for frontend
- Nest.js (Backend TS Framework) for backend
- PostgreSQL for Database

## Solution

### Prerequisite

- node
- docker

### Getting Start

This service can be simply started by the following steps.

1. Start postgreSQL docker

```sh
$make start-pg
```

2. Initialize database and schema

```sh
$make reset-pg
```

3. Run the service locally

```sh
$make dev
```

From now on, the service should be started.

Once you have stopped the service, you may also stop the postgreSQL docker by simply run

```sh
$make stop-pg
```

### Limitation

1. No duplicate coupons validation.
2. There is no product tables. We just assume that users were buying only *Annual Subscription*.
