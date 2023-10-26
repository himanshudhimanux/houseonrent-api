const express = require('express');
const {CreateHouse , getHouse} = require('../Controllers/HouseController');
const { protect } = require('../Middleware/authMiddleware');
const router = express.Router();

// Define your API routes
router.route('/createhouse').post(protect, CreateHouse)
router.route('/allhouse').get(protect, getHouse)

module.exports = router;
