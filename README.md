# Context
A company rents bikes under following options:

1. Rental by hour, charging $5 per hour
2. Rental by day, charging $20 a day
3. Rental by week, changing $60 a week
4. Family Rental, is a promotion that can include from 3 to 5 Rentals (of any type) with a discount of 30% of the total price
 
# Design
I used the main class Bike Rental to manage the Rental types that the customer wants in that moment.
To get a new rental for a bike, the rental type, that could be per hour, per day or per week, is added on the Bike Rental main class, and then the price is calculated.

When a type is created (hour, day or week) also is possible to add the amount of the type to be calculated.

In the bike rental main class is possible to add a kind of promotion to be applied to all rentals that the customer is buying.

# Development practice
The application is based on OOP, I used a strategy pattern to applied the different types of rentals

# Project dependecies

node version 6.11.0

npm version 3.10.10

Run `npm install` to get all the dependecies for the project.

# Running unit tests
Run `npm test` to execute the unit tests.
