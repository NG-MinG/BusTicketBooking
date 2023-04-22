import express from 'express'
import { getAll } from '../controllers/scheduleController.js';

const router = express.Router()

// router.patch('/updateMyPassword', authController.updatePassword);

// Get user information
router.get('/schedules', getAll);

export default router;