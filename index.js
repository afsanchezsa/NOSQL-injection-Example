var express = require('express')
var app = express()
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')
var url = "mongodb://localhost:27017/mydb";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/users', function (req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
     let username = req.query.username;
    query = { $where: `this.username == '${username}'` }
    dbo.collection("customers").find(query).toArray(function (err, users) {
			if (err) {
			res.json(err);
			} else {
				res.json(users);
			}
		} )
  });
});
app.post('/auth',function (req,res){
  let query={
    username: req.body.username,
    password: req.body.password
  }
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("customers").find(query).toArray(function (err, users) {
			if (err) {
				res.json(err);
			} else {
				if(users.length>=1){
          res.json({username:users[0].username,msg:'authenticated'});
        }
			}
		} )
  });

})

app.get('/products',function (req,res){
  let query=req.query;
   MongoClient.connect(url, function(err, db) {
     if (err) throw err;
     var dbo = db.db("mydb");
      let initDate=new Date();
     dbo.collection("products").find(query).toArray(function (err, products) {
       if (err) {
         res.json(err);
       } else {
           res.json({initDate:initDate,finalDate:new Date(),products});
      }
     } )
   });
  })
app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
