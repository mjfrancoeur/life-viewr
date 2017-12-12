Life Viewr: a web application for learning about the animal kingdom

To get started:
Clone repo
docker-compose up
docker exec -it <CONTAINER ID> bash
cd src/
npm run db migrate:latest
npm run db seed:run
nodemon server.js
