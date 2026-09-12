import express from 'express';
import { getDownloads, createDownload, deleteDownload } from '../controllers/downloadsController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.route('/').get(getDownloads).post(protect, createDownload);
router.route('/:id').delete(protect, deleteDownload);

export default router;