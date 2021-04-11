## Installation MongoDB
Execute this commands in console for launch mongodb on port 27017 and create seeds of th database in this lab:

```
docker run --name dbmongocs -p 27017:27017  mongo:3.1
docker exec -it dbmongocs bash
mongo
use mydb
db.createCollection("customers")
db.customers.insert({username:'andres', password:'1234'})
db.customers.insert({username:'felipe', password:'2343'})
db.customers.insert({username:'pedro', password:'adada'})
db.customers.find()
db.createCollection("products")
db.products.insert({name:'leche',precio:'10000',marca:'colanta'})
db.products.insert({name:'gaseosa',precio:'1300',marca:'postobon'})
db.products.insert({name:'pan',precio:'5300',marca:'bimbo'})
db.products.find()

```
## Install dependencies.

```
$ npm install
```

## Run the app

```
$ npm run start
```

## Build Docker image

```
$ cd ~/express-hello-world  # or whatever is the directory location of this repo
$ docker build -t hello-world-image .
```
## Test with postman
Take the collection Ciberseguridad NOSQL injection.postman_collection and  import it in postman for test de nosql injection on mongodb




