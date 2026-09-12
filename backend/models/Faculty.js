const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: { type: String, required: true },
    designation: { type: String, required: true },
    // qualification: { type: String, required: true },
    subjects: { type: [String], required: true },
    photoUrl: { type: String } // Cloudinary Image Link
});

module.exports = mongoose.model('Faculty', facultySchema);