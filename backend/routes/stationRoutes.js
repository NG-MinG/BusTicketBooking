import express from 'express'
import { getAll } from '../controllers/stationController.js';

const router = express.Router()

// router.patch('/updateMyPassword', authController.updatePassword);

// Get user information
router.get('/stations', getAll);

export default router;