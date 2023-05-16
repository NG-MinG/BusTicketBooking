import Location from "../models/locationModel.js";
import Ticket from "../models/ticketModel.js";
import Station from "../models/stationModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
import TicketHistory from '../models/ticketHistoryModel.js';


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

const getDetails = catchAsync(async (req, res, next) => {
    const ticket = await Ticket.findById(req.params.id);
    
    if (!ticket)
        return next(new AppError('No ticket found with that ID', 404));

    const ticketHistory = await TicketHistory.find({ ticket_id: ticket._id.toString() });

    res.status(200).json({
        status: 'success',
        ticket: ticket,
        ticketHistory: ticketHistory
    })
});

const searchTicket = catchAsync(async(req,res,next) => {
    const tickets = await Ticket.find({$text: {$search: req.query.q}});
    res.status(200).json({
        status: 'success',
        tickets: tickets,
    })
})

export {getLocations, getStations, createTicket, updateTicket, deleteTicket, searchTicket, getDetails};
