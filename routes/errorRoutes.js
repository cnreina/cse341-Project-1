const express           = require('express');
const APP_CWD           = process.cwd();
const errorController   = require(APP_CWD + '/controllers/errorController');
const router            = express.Router();

router.get('/500', errorController.get500View);
router.get('/404', errorController.get404View);

module.exports = router;
