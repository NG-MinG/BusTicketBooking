import express from "express";
import ticketBookingController from "../controllers/ticketBookingController.js";
const router = express.Router();

router.get('/get-ticket', ticketBookingController.getTicket);
router.post('/book-ticket', ticketBookingController.bookTicket);


export default router;