const HotelService = require('../services/hotels.service');

_this = this;

exports.getHotels = async (req, res, next) => {
    const filters = {};
    if(req.query.name)
        filters.name = { $regex: req.query.name, $options: 'i' }
    if(req.query.stars)
        filters.stars = { $in: JSON.parse(req.query.stars) }
    
    const page = req.query.page ? req.query.page : 1;
    const limit = req.query.limit ? req.query.limit : 10;

    try{    
        const hotels = await HotelService.getHotels(filters, page, limit)        
        return res.status(200).json({status: 200, data: hotels, message: "Hoteles consultados exitosamente"});        
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});        
    }
}

exports.FindById = async (req, res, next) => {
    const id = req.params.id;

    try{
        const hotel = await HotelService.findById(id);
        return res.status(200).json({status: 200, data: hotel, message: "Hotel consultado exitosamente"});
    }catch(e){
        return res.status(400).json({status: 400., message: e.message});
    }
}

exports.createHotel = async (req, res, next) => {
    const hotel = {
        name: req.body.name,
        stars: req.body.stars,
        price: req.body.price,
        image: req.body.image,
        amenities: req.body.amenities
    }
    try{
        const createdHotel = await HotelService.createHotel(hotel);
        return res.status(201).json({status: 201, data: createdHotel, message: "Hotel creado exitosamente"});
    }catch(e){
        return res.status(400).json({status: 400, message: "El Hotel no pudo ser creado"});
    }
}

exports.updateHotel = async (req, res, next) => {

    if(!req.body.id){
        return res.status(400).json({status: 400., message: "Se necesita un ID"});
    }
    const id = req.body.id;
    const hotel = {
        id,
        name: req.body.name ? req.body.name : null,
        stars: req.body.stars ? req.body.stars : null,
        price: req.body.price ? req.body.price : null,
        image: req.body.image ? req.body.image : null,
        amenities: req.body.amenities ? req.body.amenities : null,
    }
    try{
        const updatedHotel = await HotelService.updateHotel(hotel);
        return res.status(200).json({status: 200, data: updatedHotel, message: "Hotel actualizado exitosamente"});
    }catch(e){
        return res.status(400).json({status: 400., message: e.message});
    }
}

exports.removeHotel = async (req, res, next) => {
    const id = req.params.id;
    try{
        const deleted = await HotelService.deleteHotel(id);
        return res.status(200).json({status:200, message: "Hotel eliminado exitosamente"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}