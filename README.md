Songs API
This API allows you to manage a collection of songs with CRUD (Create, Read, Update, Delete) functionality. It uses Node.js, Express, and Sequelize for interaction with the database.

Setup Steps
1. Clone the application

git clone https://github.com/youruser/api-songs.git



- [Express](https://www.npmjs.com/package/express): A fast, non-opinionated, minimalist web framework for Node.js.
- [Cors](https://www.npmjs.com/package/cors): Middleware to enable access to resources from different origins.
- [Dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file to manage configurations.
- [Helmet](https://www.npmjs.com/package/helmet): Helps secure Express applications by setting various HTTP headers.



| Method | Url | Description 
| ------ | --- | ----------- 
| GET    | /apiv1/songs/ | Brings all the songs from the database | 
| GET    | /apiv1/songs/id | brings the songs of the id you chose from the database | |
| POST   | /apiv1/songs/ | Add new songs to the database|
| PUT    | /apiv1/songs/id | Update the songs with the ID you chose from the database |
| DELETE | /apiv1/songs/id | Delete the songs with the ID you chose from the database | 
