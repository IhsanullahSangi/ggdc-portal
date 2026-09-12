const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    title: { type: String, required: true },
    imageUrl: { type: String, required: true }, // Cloudinary Image Link
    category: {
        type: String,
        required: true,
        enum: ['Campus Infrastructure', 'Student Life', 'Events & Seminars']
    },
    eventDate: { type: Date }
});

module.exports = mongoose.model('Gallery', gallerySchema);