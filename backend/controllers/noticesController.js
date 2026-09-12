import Notice from '../models/Notice.js';

// GET /api/notices (Public) - Supports ?category=Events
export const getNotices = async (req, res) => {
    try {
        const filter = req.query.category ? { category: req.query.category } : {};
        const notices = await Notice.find(filter).sort({ publishedAt: -1 });
        res.status(200).json(notices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// POST /api/notices (Protected)
export const createNotice = async (req, res) => {
    try {
        const { title, fileUrl, category } = req.body;
        const notice = await Notice.create({ title, fileUrl, category });
        res.status(201).json(notice);
    } catch (error) {
        res.status(400).json({ message: error.message }); // Will catch Enum validation errors
    }
};

// DELETE /api/notices/:id (Protected)
export const deleteNotice = async (req, res) => {
    try {
        const notice = await Notice.findByIdAndDelete(req.params.id);
        if (!notice) return res.status(404).json({ message: 'Notice not found' });
        res.status(200).json({ message: 'Notice deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};