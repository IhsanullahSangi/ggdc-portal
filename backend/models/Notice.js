const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    fileUrl: { type: String, required: true }, // Google Drive PDF Link
    category: {
        type: String,
        required: true,
        enum: ['Latest News', 'Events', 'Announcements'] // SRS Constraint enforced at DB level
    },
    publishedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notice', noticeSchema);