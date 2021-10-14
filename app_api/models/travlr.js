const mongoose = require('mongoose');

//Schema for trips
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true }, //fixed the typo per feedback in 5.1 assignment
    name: { type: String, required: true, index: true },
    length: { type: String, required: true },
    start: { type: Date, required: true },
    resort: { type: String, required: true },
    perPerson: { type: String, required: true },
    image: { type: String, required: true },
    description: { type:String, required: true }
});
mongoose.model('trips', tripSchema);