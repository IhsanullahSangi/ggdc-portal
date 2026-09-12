import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; 

// 1. Import Routes
import authRoutes from './routes/authRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';

// 1. Add these imports at the top
import noticesRoutes from './routes/noticesRoutes.js';
import downloadsRoutes from './routes/downloadsRoutes.js';
import galleryRoutes from './routes/galleryRoutes.js';

// 1. Add this import at the top with your other routes
import facultyRoutes from './routes/facultyRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/settings', settingsRoutes);

// 2. Add these mount points below app.use('/api/settings', settingsRoutes);
app.use('/api/notices', noticesRoutes);
app.use('/api/downloads', downloadsRoutes);
app.use('/api/gallery', galleryRoutes);

// 2. Add this mount point below app.use('/api/gallery', galleryRoutes);
app.use('/api/faculty', facultyRoutes);

app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'GGDC Portal API is running smoothly',
        timestamp: new Date().toISOString()
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});