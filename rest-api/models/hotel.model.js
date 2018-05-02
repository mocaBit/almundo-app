const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const HotelSchema = new mongoose.Schema({
    name: String,
    stars: Number,
    price: Number,
    image: String,
    amenities: Array,
    id: String
});

HotelSchema.plugin(mongoosePaginate);
const Hotel = mongoose.model('Hotel', HotelSchema);

module.exports = Hotel;