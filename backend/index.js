//import express
import express from 'express';

//import cors is for providing resources for the frontend
import cors from 'cors';

// database
import db from './config/database.js';
import req from 'express/lib/request.js';

//import routes
//import Router from "./routes/routes.js";

//init express
const app = express();

//use express json
app.use(express.json());

//use cors
app.use(cors({Origin: '*'}));

//use router
//app.use(Router);

//Permissions
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Register
app.post('/register', (req, res) => {
  let theEmail;
  let thePassword;
  res.send({
    massage: `Hello ${req.body.email} ! Your user was registered!!!`,
    massage2: `Hello ${req.body.password} ! Your password was registered!!`,
  });


  theEmail = req.body.email;
  thePassword = req.body.password;
  console.log('THE e: ' + theEmail + ' The pass: ' + thePassword);
  var sql = 'INSERT INTO `user_table` (email, password) VALUES (\'' +
      theEmail + '\', \'' + thePassword + '\')';
  var query = db.query(sql, function(err, result) {
    if (err) throw err;
    console.log('1 record inserted');

  });

});

// we need to check for email and password to login
app.post('/login', (req, res) => {
  let post = req.body;
  let userEmail = post.email;
  let userPassword = post.password;
  let response = res;
  console.log('userEmail: ', userEmail + ' and password: ' + userPassword);

 var sql = 'SELECT email, password FROM `user_table` WHERE `email`=\'' +
      userEmail + '\' and password = \'' + userPassword + '\'';

  db.query(sql, function(err, results, fields) {
    try {
      if (err) throw 'err happened ' + err;
      if (results.length > 0) {
        res.send({message: 'Your successfully logged in'});
        console.log(results);// print out the result
      } else {
        console.log('Something went wrong');
        res.send({message: 'your password or your email is invalid'});
      }
    } catch (e) {
      console.log(e);
    }
  });

});


//Product upload on DB
app.post('/Upload',  (req, res, next) => {
  let productName;
  let productDescription;
  let productPrice;
  let productUrl;

  productName = req.body.nameProduct;
  productDescription = req.body.description;
  productPrice = req.body.price;
  productUrl = req.body.url_image;

  console.log('THE e: ' + productName);
  var sql = 'INSERT INTO `product` (name,description, price, imageUrl) VALUES (\'' +
      productName + '\', \'' + productDescription + '\', \'' + productPrice + '\', \'' + productUrl + '\')';
  var query = db.query(sql, function(err, result) {
    if (err) throw err;
    console.log('1 record inserted');

  });

});

// get Product API
app.get('/product', (req, res) => {
  try {
    db.query("SELECT * FROM product", function (err, result, fields) {
      if (err) throw err;
      console.log('All Products ', result);
      res.json(result);
    });
  }catch (e){
    console.log(e);
  }

});

// Get products by ID
app.get('/product/:id', (req, res) => {
  //let id = req.params.id;
  const getProductById = (id, result) => {
    db.query("SELECT * FROM product WHERE id = ?", [id], (err, results) => {
      if(err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    });
  }
  getProductById(req.params.id, (err, results) => {
    if (err){
      res.send(err);
    }else{
      res.json(results);
    }
  });


});


//PORT
app.listen(8000, () => {
  console.log('Server running successfully!');

});
