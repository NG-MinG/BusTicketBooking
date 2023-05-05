import Location from "../models/locationModel.js";
import Ticket from "../models/ticketModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";


const getAllLocations = catchAsync(async (req,res,next) => {
    const locations = await Location.find();
    res.status(200).json({
        status: 'success',
        locations: locations,  
    })
})


export {getAllLocations};