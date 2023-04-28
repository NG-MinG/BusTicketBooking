import AppError from "../utils/appError.js";
import Ticket from "../models/ticketModel.js";
import catchAsync from "../utils/catchAsync.js";

const getTicket = catchAsync(async(req,res,next) => {
    const departure_city  = req.query.departure_city;
    const arrival_city = req.query.arrival_city;
    const date = req.query.date;
    const tickets = await Ticket.find({ departure_city: departure_city, arrival_city: arrival_city, truncatedDate: date})
    res.status(200).json({
        status: "success",
        tickets: tickets
    })
})


export default {getTicket};