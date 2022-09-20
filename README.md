# Colony - Assignment for Nbyula

This repo contains an app to post classifieds by the terraformers to audience in a certain broadcast range. One can choose to bid on a classified.

### Check it out [here](https://colonyclassifieds.herokuapp.com/)

### [Postman Collection](https://www.postman.com/segefox/workspace/colony/overview)

### Challenges

PROBLEM: Needed to work with location for proximity and filter out audience for a classified 
SOLUTION: Turns out mongodb has support for geoJSON   
  
PROBLEM: Once the bids or audience of a classified grows it will become slower to filter them out.
SOLUTION: Used extended reference pattern in schema design for classified  
  

### Short Comings
##### Backend
1. I used extended reference pattern in schema design but it has not been implemented properly in APIs.    
2. A user can submit same bid multiple times, which can be a potential issue.
3. Get Classifieds will pagination when app scales
##### Frontend
1. Classifieds route and my Classifieds will need pagination on scale
2. Forms can be improved for UX
3. Push Notifications not working in production

### How it will scale

Initial Phase : A monolith and a db with proper indexes.
Phase 1 : A Monolith with read replicas
Phase 2 : Move to microservices the project structure is in accordance with that.
Phase 3 : Maybe use caching / sharding
