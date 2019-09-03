var express = require('express');
var router = express.Router();
const users = require('../controllers/user.controller.js');



/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('working');
});

// Create a new user
router.post('/users/add/', users.create);

// Retrieve all users
router.get('/users/list/', users.findAll);

// Retrieve single file
router.post('/upload/single/', users.uploadSingle);



// sanitizeFile = (file, cb) => {
//     // Define the allowed extension
//     let fileExts = ['png', 'jpg', 'jpeg', 'gif']
//     // Check allowed extensions
//     let isAllowedExt = fileExts.includes(file.originalname.split('.')[1].toLowerCase());
//     // Mime type must be an image
//     let isAllowedMimeType = file.mimetype.startsWith("image/")
//     if(isAllowedExt && isAllowedMimeType){
//         return cb(null ,true) // no errors
//     }
//     else{
//         // pass error msg to callback, which can be displaye in frontend
//         cb('Error: File type not allowed!')
//     }
// }


module.exports = router;


