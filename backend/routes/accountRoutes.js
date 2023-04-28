import express from 'express'
import { getAllAccount } from '../controllers/accountController.js';

const router = express.Router()

// router.patch('/updateMyPassword', authController.updatePassword);

// Get user information
router.get('/getaccount', getAllAccount);

export default router;