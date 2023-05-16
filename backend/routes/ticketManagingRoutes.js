import express from "express";
import {getLocations, getStations, getTrips, 
createTicket, updateTicket, deleteTicket, searchTicket} from "../controllers/ticketManagingController.js";
const router = express.Router();

router.get('/get-locations', getLocations);
router.get('/get-stations', getStations);
router.get('/get-trips', getTrips);
router.get('/search-ticket', searchTicket);
router.post('/create-ticket', createTicket);
router.delete('/delete-ticket/:id', deleteTicket);
router.put('/update-ticket/:id', updateTicket);

export default router;