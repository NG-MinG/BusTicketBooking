import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ticketBookingDetails: {
        departure_time: '',
        arrival_time: '',
        departure_city: '',
        ticket_type: '',
        price: 0,
        travel_time: '',
        distance: '',
        departure_depot: '',
        arrival_depot: '',
        bus_type: '',
        number_of_seats: 0,
        chosenDepot: '',
        payment_method: '',
        total_price: 0,
        ticket_price: "",
        choosing_seats: [],
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
            state.ticketBookingDetails.departure_time = action.payload.departure_time || "";
            state.ticketBookingDetails.arrival_time = action.payload.arrival_time || "";
            state.ticketBookingDetails.departure_city = action.payload.departure_city || "";
            state.ticketBookingDetails.ticket_type = action.payload.ticket_type || "";
            state.ticketBookingDetails.price = action.payload.price || 0;
            state.ticketBookingDetails.travel_time = action.payload.travel_time || "";
            state.ticketBookingDetails.distance = action.payload.distance || "";
            state.ticketBookingDetails.departure_depot = action.payload.departure_depot || "";
            state.ticketBookingDetails.arrival_depot = action.payload.arrival_depot || "";
            state.ticketBookingDetails.bus_type = action.payload.bus_type || "";
            state.ticketBookingDetails.number_of_seats = action.payload.number_of_seats || 0;
            state.ticketBookingDetails.total_price = action.payload.total_price || 0;
            state.ticketBookingDetails.ticket_price = action.payload.ticket_price || 0;
            state.ticketBookingDetails.payment_method = action.payload.payment_method || "";
            state.ticketBookingDetails.choosing_seats = action.payload.choosing_seats || [];
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