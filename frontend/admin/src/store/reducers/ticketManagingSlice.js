import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tickets: [],
    currentTicketDetails: {
        // _id: "",
        date: "",
        departure_time: "",
        arrival_time: "",
        departure_city: "",
        arrival_city: "",
        ticket_type: 1,
        price: 0,
        travel_time: 11760,
        distance: 161000,
        departure_depot: "",
        arrival_depot: "",
        bus_type: "",
        booked_seats: [],
        // reserved_seats: 0,
        total_seats: 0,
    }
}

const ticketManagingSlice = createSlice({
    name: "ticketManaging",
    initialState,
    reducers: {
        setCurrentTicketDetails: (state,action) => {
            // state.currentTicketDetails._id = action.payload._id || "";
            state.currentTicketDetails.date = action.payload.date || "";
            state.currentTicketDetails.departure_time = action.payload.departure_time || "";
            state.currentTicketDetails.arrival_time = action.payload.arrival_time || "";
            state.currentTicketDetails.departure_city = action.payload.departure_city || "";
            state.currentTicketDetails.arrival_city = action.payload.arrival_city || "";
            state.currentTicketDetails.price = action.payload.price || 0;
            state.currentTicketDetails.departure_depot = action.payload.departure_depot || "";
            state.currentTicketDetails.arrival_depot = action.payload.arrival_depot || "";
            state.currentTicketDetails.bus_type = action.payload.bus_type || "";
            state.currentTicketDetails.total_seats = action.payload.total_seats || 0;
        },
        setTickets: (state, action) => {
            state.tickets = action.payload;
        }
    }   
})

export const {setCurrentTicketDetails, setTickets} = ticketManagingSlice.actions;

export default ticketManagingSlice.reducer;