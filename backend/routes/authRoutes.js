const express = require('express');
const authController = require('../controllers/authController');
const { checkLoggedIn } = require("../middleware");
const router = express.Router();

// Signup route
router.post('/signup', authController.signup);

// Login route
router.post('/login', authController.login);

//Jwt Valid route
router.get("/checkjwt",checkLoggedIn,authController.valid)

module.exports = router;
