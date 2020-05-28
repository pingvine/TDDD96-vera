# Vera 20

TODO: Add links to documents, present the project members; a new header that includes the technical details; project information

To run VERA you must install (assuming a Windows environment)

* MongoDB (4.2.6 2008R2Plus)
* NodeJS (12.8.0)
* Angular (9.0.5)

Install the required modules by typing `npm install` in the directories /server and /client.

We recommend running WebStorm Professional IDE with the included .eslintrc.json (AirBnB code standard) for code style.

The client is 'heavy' and is able to work with patients by itself through openEHR, but it is recommended to run both the server and client in order to get notifications and other functionality that includes work with the database.

This project was generated with version Angular 9.0.5.

## Development front end server

Navigate to ./client and run `ng serve` to start the dev server. The server will be hosting at `http://localhost:4200/`.

## Development back end server

Navigate to ./server and run `npm start` to start the dev server. The server will be hosting at `http://localhost:4201/`. If the server is working correctly, the json test data will show.

## Database 

Navigate to ./server/mongodb and run `./bin/mongod` to start the database.

## Code scaffolding

Run `ng generate component component-name` to generate a new component.

## Running unit tests

Run `ng test` to execute the unit tests.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests.

## Further help

To get more help on the Angular CLI use `ng help`. 
