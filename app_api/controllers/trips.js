const mongoose = require('mongoose');
const model = mongoose.model('trips');

//GET: /trips to return all trips in a list
const tripsList = async (req, res) => {
    model
        .find({}) //empty filter to get all
        .exec((err, trips) => {
            if (!trips) {
                return res
                .status(404) //no trips error
                .json({"message": "No trips found"});
            } else if (err) {
                return res
                .status(404) //generic error
                .json(err);
            } else {
                return res
                .status(200) //set 200 status for success
                .json(trips);
            }
        });
};

//GET: /trips/:tripCode to return a single trip info
const tripsFindByCode = async (req, res) => {
    model
    .find({ 'code': req.params.tripCode}) //filter for the code
        .exec((err, trip) => {
            if (!trip) {
                return res
                .status(404) //no trips error
                .json({"message": "That trip not found"});
            } else if (err) {
                return res
                .status(404) //generic error
                .json(err);
            } else {
                return res
                .status(200) //set 200 status for success
                .json(trip);
            }
        });
}

module.exports = {
    tripsList,
    tripsFindByCode
};