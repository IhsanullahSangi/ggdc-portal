import Timetable from '../models/Timetable.js';

// GET /api/timetables (Public)
export const getTimetables = async (req, res) => {
    try {
        // Allows future filtering, but grabs everything by default
        const filter = req.query.category ? { category: req.query.category } : {};
        const timetables = await Timetable.find(filter).sort({ uploadedAt: -1 });
        res.status(200).json(timetables);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST /api/timetables (Protected)
export const createTimetable = async (req, res) => {
    try {
        // You only need to send { title, fileUrl } from the frontend!
        const { title, fileUrl, category } = req.body;
        const timetable = await Timetable.create({ title, fileUrl, category });
        res.status(201).json(timetable);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE /api/timetables/:id (Protected)
export const deleteTimetable = async (req, res) => {
    try {
        const timetable = await Timetable.findByIdAndDelete(req.params.id);
        if (!timetable) return res.status(404).json({ message: 'Timetable not found' });
        res.status(200).json({ message: 'Timetable deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};