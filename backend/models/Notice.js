import mongoose from 'mongoose';

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

export default mongoose.model('Notice', noticeSchema);