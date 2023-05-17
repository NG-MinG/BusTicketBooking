import express from "express";
import {getLocations, getStations, createTicket} from "../controllers/ticketManagingController.js";
const router = express.Router();

router.get('/get-locations', getLocations);
router.get('/get-stations', getStations);
router.post('/create-ticket', createTicket)

export default router;