import express from "express";
import {getLocations, getStations, createTicket, updateTicket, deleteTicket} from "../controllers/ticketManagingController.js";
const router = express.Router();

router.get('/get-locations', getLocations);
router.get('/get-stations', getStations);
router.post('/create-ticket', createTicket);
router.delete('/delete-ticket/:id', deleteTicket);
router.put('/update-ticket/:id', updateTicket);

export default router;