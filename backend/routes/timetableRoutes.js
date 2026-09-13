import express from 'express';
import { getTimetables, createTimetable, deleteTimetable } from '../controllers/timetableController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').get(getTimetables).post(protect, createTimetable);
router.route('/:id').delete(protect, deleteTimetable);

export default router;