import Location from "../models/locationModel.js";
import Ticket from "../models/ticketModel.js";
import Station from "../models/stationModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";


const getLocations = catchAsync(async (req,res,next) => {
    const locations = await Location.find();
    res.status(200).json({
        status: 'success',
        locations: locations,  
    })
})

const getStations = catchAsync(async(req,res,next) => {
    const stations = await Station.find();
    res.status(200).json({
        status: 'success',
        stations: stations,
    })
})

const createTicket = catchAsync(async(req,res,next) => {
    const data = req.body;
    console.log(data);
    await Ticket.create(data);
    const newTicket = await Ticket.find({data});
    console.log("new Ticket: ", newTicket);
    res.status(200).json({
        status: 'success',
    })
})


export {getLocations, getStations, createTicket};