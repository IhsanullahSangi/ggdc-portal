const mongoose = require('mongoose');

const globalSettingsSchema = new mongoose.Schema({
    isPopupActive: { type: Boolean, default: false },
    popupTitle: { type: String, default: 'Important Announcement' },
    popupContent: { type: String }, // Can hold rich text or HTML
    enrollmentCount: { type: Number, default: 551 } // Dynamic counter
});

module.exports = mongoose.model('GlobalSettings', globalSettingsSchema);