import express from 'express';
import { getFaculty, addFaculty, deleteFaculty } from '../controllers/facultyController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').get(getFaculty).post(protect, addFaculty);
router.route('/:id').delete(protect, deleteFaculty);

export default router;