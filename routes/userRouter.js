const express = require('express');
const router = express.Router();
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");

router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.get('/user',authController.protect,userController.getUsers)
module.exports = router;

