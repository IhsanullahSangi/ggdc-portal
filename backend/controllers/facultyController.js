import Faculty from '../models/Faculty.js';

// GET /api/faculty (Public)
export const getFaculty = async (req, res) => {
    try {
        // Sorts faculty alphabetically by name for a clean directory UI
        const faculty = await Faculty.find().sort({ name: 1 });
        res.status(200).json(faculty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST /api/faculty (Protected)
export const addFaculty = async (req, res) => {
    try {
        const { name, designation, subjects, photoUrl } = req.body;
        const faculty = await Faculty.create({ name, designation, subjects, photoUrl });
        res.status(201).json(faculty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// DELETE /api/faculty/:id (Protected)
export const deleteFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.findByIdAndDelete(req.params.id);
        if (!faculty) return res.status(404).json({ message: 'Faculty member not found' });
        res.status(200).json({ message: 'Faculty member deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};