import mongoose from 'mongoose';

const globalSettingsSchema = new mongoose.Schema({
    isPopupActive: { type: Boolean, default: false },
    popupTitle: { type: String, default: 'Important Announcement' },
    popupContent: { type: String }, // Can hold rich text or HTML
    enrollmentCount: { type: Number, default: 551 } // Dynamic counter
});

export default mongoose.model('GlobalSettings', globalSettingsSchema);