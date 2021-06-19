var express = require('express');
var router = express.Router();
const controller = require('../controller/apiController');

/* add to users listing. */
router.post('/add', controller.addUser);

/* delete users from listing. */
router.delete('/delete', controller.deleteUser);

/* Update user listing. */
router.put('/update', controller.updateUser);

/* GET users listing. */
router.get('/users', controller.getUser);

module.exports = router;
