const express = require('express');
const {createHouse , getHouse, updateHouse, deleteHouse} = require('../Controllers/HouseController');
const { protect } = require('../Middleware/authMiddleware');
const router = express.Router();

// Define your API routes
router.route('/createhouse').post(protect, createHouse)
router.route('/allhouse').get(protect, getHouse)
router.route('/updatehouse/:_id').put(protect, updateHouse)
router.route('/deletehouse/:_id').delete(protect, deleteHouse)

module.exports = router;
