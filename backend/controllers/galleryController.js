import Gallery from '../models/Gallery.js';

export const getGalleryImages = async (req, res) => {
    try {
        const filter = req.query.category ? { category: req.query.category } : {};
        const images = await Gallery.find(filter).sort({ eventDate: -1, _id: -1 });
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addGalleryImage = async (req, res) => {
    try {
        const { title, imageUrl, category, eventDate } = req.body;
        const image = await Gallery.create({ title, imageUrl, category, eventDate });
        res.status(201).json(image);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteGalleryImage = async (req, res) => {
    try {
        const image = await Gallery.findByIdAndDelete(req.params.id);
        if (!image) return res.status(404).json({ message: 'Image not found' });
        res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};