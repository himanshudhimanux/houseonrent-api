const express = require('express');
const { RegisteUser, LoginUser } = require('../Controllers/UserController');
const router = express.Router();

// Define your API routes
router.route('/register').post(RegisteUser)
router.route('/login').post(LoginUser)

module.exports = router;
