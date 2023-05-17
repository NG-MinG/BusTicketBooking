import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    date: Date,
    departure_time: String,
    arrival_time: String,
    departure_city: String,
    arrival_city: String,
    ticket_type: Number,
    price: Number,
    travel_time: Number,
    distance: Number,
    departure_depot: String,
    arrival_depot: String,
    bus_type: String,
    reserved_seats: {
        type: Number,
        default: 0
    },
    total_seats: Number,
    booked_seats: [String],
}, { toJSON: { virtuals: true } })

ticketSchema.virtual('truncatedDate').get(function() {
    return this.date.toISOString().substring(0,10);
})

const Ticket = mongoose.model('tickets', ticketSchema); 

export default Ticket;