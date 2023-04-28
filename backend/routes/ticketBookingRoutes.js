import express from "express";
import ticketBookingController from "../controllers/ticketBookingController.js";
const router = express.Router();

router.get('/get-ticket', ticketBookingController.getTicket);

export default router;