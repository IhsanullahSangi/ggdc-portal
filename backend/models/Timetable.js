import mongoose from 'mongoose';

const timetableSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Timetable title is required'],
        trim: true
    },
    fileUrl: {
        type: String,
        required: [true, 'Google Drive link is required']
    },
    category: {
        type: String,
        default: 'General' // Automatically assigns 'General' if you don't specify one
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Timetable', timetableSchema);