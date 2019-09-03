const User = require('../models/user.model.js');


var multer = require('multer')

// SET STORAGE
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
 
var upload = multer({ 
	storage: storage}).single('avatar')




// Create and Save a new Note
exports.create = (req, res) => {
	var user = new User(req.body);
	user.save()
	.then(item => {
	 	res.status(200).send(user);
	 })
	 .catch(err => {
	 	res.status(400).send(err);
	 })
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
	User.find().
	then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};

exports.uploadSingle = (req, res) => {
	upload(req, res, (err) => {
        if (err){ 
            res.render('index', { msg: err})
        }else{
                res.send(req.file);
            }
        })
}