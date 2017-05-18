# hacktivpress
### this is a simple cms app, built using Node.js, Express.js, Vue.js, Element.io

##### to run the program, first install all the dependencies at server & client side with npm install
##### at server side, in the terminal, type npm start
##### at client side, in the terminal, type npm run dev, it will immediately lead to the default browser

### API

Methods | Routes | Description
--- | --- | ---
GET | /users/:id | get one user with his/her articles
POST | /users/signin | to sign in
POST | /users/signup | to sign up
GET | /articles | get all articles
GET | /articles/:id | get one article
GET | /articles/category | get articles based on category (provide category in body)
POST | /articles | create a new article
DELETE | /articles/:id | delete an article
PUT | /articles/:id | update an article