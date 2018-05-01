//Variables
const express = require('express');
const hotelRoutes = require('./api/hotels.route');
const userRoutes = require('./api/users.route');
const authRoutes = require('./api/auth.route');
const router = express.Router();
//Actions
router.use('/hotels', hotelRoutes);
//Export
module.exports = router;