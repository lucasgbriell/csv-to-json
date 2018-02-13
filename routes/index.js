var express = require('express');
var router = express.Router();
var multer = require('multer');
var csvController = require('../controllers/csvController'); 

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {

    cb(null, file.fieldname + '.csv')
  }
})

var upload = multer({ storage: storage })


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});


router.post('/csv-to-json', upload.single('csv-file'), csvController.csvToJson);


module.exports = router;
