import express from 'express';
import { getNotices, createNotice, deleteNotice } from '../controllers/noticesController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();
router.route('/').get(getNotices).post(protect, createNotice);
router.route('/:id').delete(protect, deleteNotice);

export default router;