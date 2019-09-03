const express = require('express');
const bodyParser = require('body-parser');
var indexRouter = require('./routes/user.routes.js');
var cors = require('cors');
// create express app
const app = express();
app.use(cors());

app.use('/uploads', express.static(__dirname + '/uploads'));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoos = require('mongoose');

// Connecting to the database
mongoos.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// Adding router to app
app.use('/', indexRouter);



app.listen(8000, () => {

    console.log('App running on port 8000');

});




































// var express = require('express');
// var app = express();
// var multer = require('multer')
// var cors = require('cors');
// const bodyParser = require('body-parser');
// //var indexRouter = require('./routes/index');
// var mongoose = require("mongoose");
// app.use(cors());
// app.use(bodyParser.json());


// /* connect mongo db */
// mongoose.Promise = global.Promise;
// var mongoDB = 'mongodb://127.0.0.1:27017/msform';
// mongoose.connect(mongoDB, { useNewUrlParser: true });

// // var Schema = mongoose.Schema;

// // var nameSchema = new Schema({
// //  name: String,
// //  email: String,
// //  telephone: String,
// //  category: String,
// //  password: String,
// //  secCode: String,
// //  country: String,
// //  website: String,
// //  avatar: { data: Buffer, contentType: String },
// //  terms: String
// // });

// // var User = mongoose.model("User", nameSchema);

// var storage = multer.diskStorage({
//       destination: function (req, file, cb) {
//       cb(null, 'public')
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + '-' +file.originalname )
//     }
// })

// var upload = multer({ storage: storage }).single('file');

// app.post('/user/add',(req, res) => {

// 	//console.log("Request data:");
// 	var user = new User(req.body.user);
// 	user.save()
// 	.then(item => {
// 	 	res.status(200).	send("User saved to database");
// 	 })
// 	 .catch(err => {
// 	 	res.status(400).send(err);
// 	 });

// });

// app.get('/user/get', (req, res) => {
// 	dbmongo.User.find().
// 	then(users => {
//         res.send(users);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while retrieving users."
//         });
//     });
// });

// //app.use('/', indexRouter);
