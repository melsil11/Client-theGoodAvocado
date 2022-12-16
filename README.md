# The Good Avocado App

A Yelp Mockup: Restaurant Descriptions and Reviews

## The Flossing Avocados

* Alina Ishizaki - https://github.com/amishizaki
* Angel Zhou - https://github.com/angel-zh
* Melanie Silva - https://github.com/melsil11
* Sam Phillips - https://github.com/sam-phillips21

## Description

Our Application is designed to allow users to interact with various restaurants. Users can share their favorite restaurants to help users have better experiences when dining out. Users will be able to share their experiences and leave reviews.  Our intended audience is for anyone who enjoys trying new restaurants and sharing their love of food. People all over the world are always looking for insight before spending their hard earned money on a lousy meal. Food is something everyone enjoys and we hope to share a great platform to help users have great meals.

* Compile seed data based on a few restaurants in various locations to start
* Restaurant Seed data: name, address , telephone, type, otherTypes, delivery, reservations, takeout, catering, acceptsCreditCards, parking, wifi, masksRequired, alcohol, vegan 

* Restaurant model: 
- Name: String
- Address: String
- Telephone: String
- Type: String
- OtherTypes: String
- IsRestaurantOwner 
- Delivery: Boolean
- Reservations: Boolean
- Takeout: Boolean
- Catering: Boolean
- AcceptsCreditCards: Boolean
- Parking: Boolean
- Wifi: Boolean
- MasksRequired: Boolean
- Alcohol: Boolean
- Vegan: Boolean	
- Reviews: Sub-document
- Owner: mongoose.Schema.Types.ObjectId

* Review model:
- Comment: String
- Rating: String
- Owner: mongoose.Schema.Types.ObjectId
- OwnerEmail: String



## Technologies Used

* Mongoose
* React
* Express
* Node.js
* MongoDB 
* Bootstrap


## User Stories

As a user, I want the ability to... 
* sign up.
* sign in. 
* change my password. 
* sign out. 
* find restaurants. 
* see the menu( image?) or link to menu
* read reviews on restaurants
* review the restaurant with comments/Rating.
* create my own restaurants. 
* update my comments/reviews. 
* view all of my restaurant reviews in a list. 
* read more details of individual experiences. 
* delete my review. 
* view reviews others have created. 
* favorite restaurants that other people have created. 


## Wireframes

![1](https://share.balsamiq.com/c/tWNZY9PhP3jbcugUK58au4.png)
![2](https://share.balsamiq.com/c/gEbEcZyXBUcMgfq1TS3Qvt.png)
![3](https://share.balsamiq.com/c/b8N7rZbP4yhqQXfV6x5iRM.png)
![4](https://share.balsamiq.com/c/mGTtzQNFKbG6Cp2HgSBYGM.png)
![5](https://share.balsamiq.com/c/wCKymQfzvSmnzSDwwwbME8.png)

## ERD

![6](https://i.imgur.com/6j2sMz3.png)


## Schedule

| Day | Task |
| --------- | -------- |
| Monday | * Approval * API setup * Models * Functionality * Research for Frontend |
| Tuesday | * More of the same * Check Functionality |
| Wednesay | * Frontend * React - Components * Testing |
| Thursday | * Frontend * React - Components * Testing * Stretch Goals |
| Friday | * Deploy * Presentation |


## More details

link to Route Table: https://docs.google.com/document/d/1akUKBv4C3ENjpQdZiww0Eg14tJImJ6vQsz81rTDH7n4/edit

## Backup Idea

TripAdvisor Mockup