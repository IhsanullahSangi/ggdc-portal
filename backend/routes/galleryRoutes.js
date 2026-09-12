import express from 'express';
import { getGalleryImages, addGalleryImage, deleteGalleryImage } from '../controllers/galleryController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.route('/').get(getGalleryImages).post(protect, addGalleryImage);
router.route('/:id').delete(protect, deleteGalleryImage);

export default router;