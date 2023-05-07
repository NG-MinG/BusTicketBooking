import express from 'express'
import { getAll, getBySearch, updateStage } from '../controllers/ticketHistoryController.js';

const router = express.Router()

// router.patch('/updateMyPassword', authController.updatePassword);

// Get user information
router.get('/ticketHistory', getAll);
router.patch('/searchTicketHistory', getBySearch);
router.post('/updateStage', updateStage);

export default router;