# test-payment-form

This is an assignment for an interview process of Caliber.

- [Instruction](#instruction)

- [Solution](#solution)

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

### Frontend

Frontend can be simply started by run the following command at project root.

```sh
make fe
```

### Backend

#### Prerequisite

- node
- docker

#### Setup DB and Starting Server

This service use postgres docker for out DB.

Start postgreSQL docker

```sh
make start-pg
```

Initialize database and schema

```sh
make reset-pg
```

At this point, your database should be inited and the next step is starting HTTP API server.


```sh
make be
```

Congratulation! you just started your backend server.

When you have stopped the server by `cmd+C`, you may also stop the postgreSQL docker by simply run

```sh
make stop-pg
```

## TODO

This project **is not completed yet** because it still lacks features referred to the requirements.

1. No acutal Emails were sent to the users. We still need to integrate our server with 3rd API such as gmail.

2. No form validation at Frontend. We also have to implement the form input validation.

3. No mocking payment service was implemented. We just receives the credit card information and do nothing.