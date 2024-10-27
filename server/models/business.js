// models/Business.js
const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    category: String,
    location: {
        address: String,
        city: String,
        state: String,
        zip: String,
    },
    rating: { type: Number, default: 0 },
    reviews: [{ user: String, review: String }]
});

module.exports = mongoose.model('Business', BusinessSchema);
