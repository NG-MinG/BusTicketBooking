import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ticketBookingDetails: {
        ticket_id: '',
        truncatedDate: '',
        departure_time: '',
        arrival_time: '',
        departure_city: '',
        arrival_city: '',
        ticket_type: '',
        price: 0,
        travel_time: '',
        distance: '',
        departure_depot: '',
        arrival_depot: '',
        bus_type: 1,
        booked_seats: [],
        reserved_seats: 0,
        total_seats: 0,
        choosing_seats: [],
        total_price: 0,
    },
    guestInfo: {
        name: '',
        phoneNumber: '',
        email: '',
        age: 0,
        city: '',
    },
}   

const ticketBookingSlice = createSlice({
    name: "ticketBooking",
    initialState,
    reducers: {
        setTicketBookingDetails: (state,action) => {
            state.ticketBookingDetails.ticket_id = action.payload.ticket_id || "";
            state.ticketBookingDetails.truncatedDate = action.payload.truncatedDate || "";
            state.ticketBookingDetails.departure_time = action.payload.departure_time || "";
            state.ticketBookingDetails.arrival_time = action.payload.arrival_time || "";
            state.ticketBookingDetails.departure_city = action.payload.departure_city || "";
            state.ticketBookingDetails.arrival_city = action.payload.arrival_city || "";
            state.ticketBookingDetails.ticket_type = action.payload.ticket_type || "";
            state.ticketBookingDetails.price = action.payload.price || 0;
            state.ticketBookingDetails.travel_time = action.payload.travel_time || "";
            state.ticketBookingDetails.distance = action.payload.distance || "";
            state.ticketBookingDetails.departure_depot = action.payload.departure_depot || "";
            state.ticketBookingDetails.arrival_depot = action.payload.arrival_depot || "";
            state.ticketBookingDetails.bus_type = action.payload.bus_type || "";
            state.ticketBookingDetails.booked_seats = action.payload.booked_seats || [];
            state.ticketBookingDetails.reserved_seats = action.payload.reserved_seats || 0;
            state.ticketBookingDetails.total_seats = action.payload.total_seats || 0;
            state.ticketBookingDetails.choosing_seats = action.payload.choosing_seats || [];
            state.ticketBookingDetails.total_price = action.payload.total_price || 0;
        },
        setGuestInfo: (state,action) => {
            state.guestInfo.name = action.payload.name || "";
            state.guestInfo.phoneNumber = action.payload.phoneNumber || "";
            state.guestInfo.email = action.payload.email || "";
            state.guestInfo.age = action.payload.age || 0;
            state.guestInfo.city = action.payload.city || "";
        }
    }
})

export const {setTicketBookingDetails, setGuestInfo} = ticketBookingSlice.actions;
export default ticketBookingSlice.reducer;