import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentTicketDetails: {
        departure_city: "",
        arrival_city: "",
        departure_depot: "",
        arrival_depot: "",
        date_time: "",
        bus_type: "",
        ticket_price: "",
    }
}

const ticketManagingSlice = createSlice({
    name: "ticketManaging",
    initialState,
    reducers: {
        setTicketManagingDetails: (state,action) => {
            state.currentTicketDetails.departure_city = action.payload.departure_city || "";
            state.currentTicketDetails.arrival_city = action.payload.arrival_city || "";
            state.currentTicketDetails.departure_depot = action.payload.departure_depot || "";
            state.currentTicketDetails.arrival_depot = action.payload.arrival_depot || "";
            state.currentTicketDetails.date_time = action.payload.date_time || "";
            state.currentTicketDetails.bus_type = action.payload.bus_type || "";
            state.currentTicketDetails.ticket_price = action.payload.ticket_price || "";
        },
    }   
})

export const {setTicketManagingDetails} = ticketManagingSlice.actions;

export default ticketManagingSlice.reducer;