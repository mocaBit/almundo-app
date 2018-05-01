const Hotel = require('../models/hotel.model');
const hotels = require('./data.json');

module.exports = {
    insertData: () => {
        Hotel.insertMany(hotels, (err, hotels) => {
            if (err)
                console.log(err);
        })
    }
}