//Variables
const express = require('express');
const HotelController = require('../../controllers/hotels.controller');
const router = express.Router();
//Actions
router.get('/', HotelController.getHotels);
router.get('/:id', HotelController.FindById);
router.post('/', HotelController.createHotel);
router.put('/', HotelController.updateHotel);
router.delete('/:id',HotelController.removeHotel);
//Export
module.exports = router;