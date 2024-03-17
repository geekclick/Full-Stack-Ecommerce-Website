const express = require('express');
const router = express.Router();
const authcontroller = require('../controllers/auth-controller');
const forgotcontroller = require('../controllers/forgot-controller');


//------------------------ User Route -----------------------//
router.route('/').get(authcontroller.home);
router.route('/register').post(authcontroller.register);
router.route('/login').post(authcontroller.login);
router.route('/verifyRegisterOTP').post(authcontroller.verifyOTP);
router.route('/getAllUser').get(authcontroller.getAllUser);


//------------------------ Product Route -----------------------//
router.route('/forgotPassword').post(forgotcontroller.forgotPassword);
router.route('/verifyOtp').post(forgotcontroller.verifyOtp);
router.route('/resetPassword').post(forgotcontroller.resetPassword);


module.exports = router;