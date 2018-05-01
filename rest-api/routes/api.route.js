//Variables
const express = require('express');
const hotelRoutes = require('./api/hotels.route');
const router = express.Router();
//Actions
router.use('/hotels', hotelRoutes);
//Export
module.exports = router;