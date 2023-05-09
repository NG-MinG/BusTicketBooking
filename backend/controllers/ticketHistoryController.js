import catchAsync from "../utils/catchAsync.js"
import TicketHistory from "../models/ticketHistoryModel.js"
import Ticket from "../models/ticketModel.js";

const getAll = catchAsync(async (req, res) => {
  const ticketHistory = await TicketHistory.find()
  // console.log(ticketHistory)
  res.status(200).json({
    status: 'success',
    data: { ticketHistory }
  })
})

const getBySearch = catchAsync(async (req, res) => {
  const search = req.body.search.toLowerCase()
  const ticket_history_filter = []
  const ticket_history = await TicketHistory.find()
  for (let i of ticket_history) {
    const result1 = new Date(i.date).toLocaleDateString('en-GB');
    if (i.guestInfo.name.toLowerCase().includes(search) || i.guestInfo.phoneNumber.includes(search) || i.departure_city.toLowerCase().includes(search) || i.arrival_city.toLowerCase().includes(search)) {
      ticket_history_filter.push(i)
    }
    else if (i.time.includes(search) || result1.toString().includes(search)) ticket_history_filter.push(i)
    else if (i.stage.toLowerCase().includes(search)) ticket_history_filter.push(i)
  }
  res.status(200).json({
    status: 'success',
    data: { ticket_history_filter }
  })
})


const updateStage = catchAsync(async (req, res) => {
  const ticketHistory = await TicketHistory.findById(req.body.id);
  ticketHistory.stage = req.body.stage;
  ticketHistory.save()

  if (req.body.stage === "Đã huỷ") {
    const ticket = await Ticket.findById(ticketHistory.ticket_id);
    ticket.booked_seats = ticket.booked_seats.filter(val => !ticketHistory.chosen_seats.includes(val))
    ticket.save()
  }
  res.status(200).json({
    status: 'success',
  })
})

const deleteItem = catchAsync(async (req, res) => {
  const item = await TicketHistory.findById(req.body.id)
  await TicketHistory.deleteOne({ _id: req.body.id })

  const ticket = await Ticket.findById(item.ticket_id);
  ticket.booked_seats = ticket.booked_seats.filter(val => !item.chosen_seats.includes(val))
  ticket.save()
  res.status(200).json({
    status: 'success',
    data: item
  })
  // const ticketHistory = await TicketHistory
})

const getTicketSeat = catchAsync(async (req, res) => {
  const ticket = await Ticket.findById(req.body.id);
  res.status(200).json({
    status: 'success',
    data: ticket
  })
})

const update = catchAsync(async (req, res) => {
  const ticket_history = await TicketHistory.findById(req.body.id)
  ticket_history.chosen_seats = req.body.chosen_seats
  ticket_history.number_of_seats = req.body.chosen_seats.length
  ticket_history.guestInfo = req.body.guestInfo
  ticket_history.save()

  const ticket = await Ticket.findById(ticket_history.ticket_id);
  ticket.booked_seats = ticket.booked_seats.filter(val => !req.body.chosen_seats.includes(val))
  ticket.save()
  res.status(200).json({
    status: 'success',
  })
})

export { getAll, getBySearch, updateStage, deleteItem, getTicketSeat, update }