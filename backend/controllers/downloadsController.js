import Download from '../models/Download.js';

export const getDownloads = async (req, res) => {
    try {
        const filter = req.query.category ? { category: req.query.category } : {};
        const downloads = await Download.find(filter).sort({ uploadedAt: -1 });
        res.status(200).json(downloads);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createDownload = async (req, res) => {
    try {
        const { title, fileUrl, category } = req.body;
        const download = await Download.create({ title, fileUrl, category });
        res.status(201).json(download);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteDownload = async (req, res) => {
    try {
        const download = await Download.findByIdAndDelete(req.params.id);
        if (!download) return res.status(404).json({ message: 'Download not found' });
        res.status(200).json({ message: 'Download deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};