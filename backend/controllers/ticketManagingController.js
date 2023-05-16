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
    const newTicket = await Ticket.create(data);
    res.status(200).json({
        status: 'success',
        ticketCreated: newTicket
    })
})

const updateTicket = catchAsync(async(req,res,next) => {
    const ticket_id = req.params.id;
    // console.log("req.body: ", req.body);
    const updatedTicket = await Ticket.findByIdAndUpdate(ticket_id, req.body, {new: true})
    console.log("this updated ticket: ", updatedTicket);
    res.status(200).json({
        status: "success",
        updatedTicket: updatedTicket
    })
})

const deleteTicket = catchAsync(async(req,res,next) => {
    const ticket = await Ticket.findOneAndDelete({_id: req.params.id});
    res.status(200).json({
        status: 'success',
        ticketId: ticket._id
    })
})

export {getLocations, getStations, createTicket, updateTicket, deleteTicket};