import express from 'express'
import { getAllAccount, banAccount, deleteAccount } from '../controllers/adminAccountController.js';
import { getAllStation, editStation, createStation, deleteStation } from '../controllers/adminStationController.js';
import { getAllTrip, editTrip, createTrip, deleteTrip } from '../controllers/adminTripController.js';

const router = express.Router()

// Account
router.get('/getaccount', getAllAccount);
router.post('/banaccount/:id', banAccount);
router.post('/deleteaccount/:id', deleteAccount);

// Station
router.get('/getstation', getAllStation);
router.post('/editstation/:id', editStation);
router.post('/deletestation', deleteStation);
router.post('/createstation', createStation);

//Trip
router.get('/gettrip', getAllTrip);
router.post('/edittrip/:id', editTrip);
router.post('/deletetrip/:id', deleteTrip);
router.post('/createtrip', createTrip);

export default router;