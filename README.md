
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>


## Project Overview
  <pre>This is a example of a crud api that uses nestjsx/crud dependency to implement crud functionality. 

This project use an relational database sqlite to store data

I also used the swagger ui library to create and interactive ui. 

I created three modules that have full crud functionality.

See images below.
</pre>
## User Endpoints (/users)
![Users Endpoints](./images/users.png)
## Products Endpoints (/products)
![Product Endpoints](./images/products.png)
## Company Endpoints (/company)
![Company Endpoints](./images/company.png)


## Running the app
```bash
# development
$ npm run start
# watch mode
$ npm run start:dev
# production mode
$ npm run start:prod
```
## Test
```bash
# unit tests
$ npm run test
# e2e tests
$ npm run test:e2e
# test coverage
$ npm run test:cov
```
## nestjsx/crud 101 
    when implementing a new crud functionality

    1. Create the Module 
    2. Create the the Entity (Define Schema)
    3. Create the Service (Implement Entity)
    4. Create the Controller (Implement Entity && Service)
    5. Connect Service and Controller to Module (Implement Entity && Service && Controller)