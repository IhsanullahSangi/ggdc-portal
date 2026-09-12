const mongoose = require('mongoose');

const downloadSchema = new mongoose.Schema({
    title: { type: String, required: true },
    fileUrl: { type: String, required: true }, // Google Drive PDF Link
    category: {
        type: String,
        required: true,
        enum: ['Admission Forms', 'Challan Forms'] // SRS Constraint enforced
    },
    uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Download', downloadSchema);