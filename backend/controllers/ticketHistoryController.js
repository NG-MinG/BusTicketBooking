import catchAsync from "../utils/catchAsync.js"
import TicketHistory from "../models/ticketHistoryModel.js"
import Ticket from "../models/ticketModel.js"
import User from "../models/userModel.js"

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
  const schedule_filter = []
  const schedules = await Schedule.find()
  for (let i of schedules) {
    if (i.departure_city.toLowerCase().includes(search) || i.arrival_city.toLowerCase().includes(search)) {
      schedule_filter.push(i)
    }
  }
  res.status(200).json({
    status: 'success',
    data: { schedule_filter }
  })
})

const updateStage = catchAsync(async (req, res) => {
  const ticketHistory = await TicketHistory.findById(req.body.id);
  ticketHistory.stage = req.body.stage;
  ticketHistory.save()
})

const deleteItem = catchAsync(async (req, res) => {
  const item = await TicketHistory.findById(req.body.id)
  await TicketHistory.deleteOne({ _id: req.body.id })

  if (item.user_id) {
    const user = await User.findById(item.user_id)
    user.myTicket.splice(user.myTicket.indexOf(req.body.id.toString()), 1)
    user.save()
  }

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
  const ticket = await Ticket.findById(req.body.ticket_id);
  const ticket_history = await TicketHistory.findById(req.body.history_id);
  res.status(200).json({
    status: 'success',
    data: {
      ticket: ticket,
      ticket_history: ticket_history
    }
  })
})

const update = catchAsync(async (req, res) => {
  const ticket_history = await TicketHistory.findById(req.body.id)

  const ticket = await Ticket.findById(ticket_history.ticket_id);
  ticket.booked_seats = ticket.booked_seats.filter(val => !ticket_history.chosen_seats.includes(val))
  ticket.booked_seats = [...ticket.booked_seats, ...req.body.chosen_seats]
  ticket.save()

  // console.log(ticket.booked_seats)

  ticket_history.chosen_seats = req.body.chosen_seats
  ticket_history.number_of_seats = req.body.chosen_seats.length
  ticket_history.guestInfo = req.body.guestInfo
  ticket_history.total_price = req.body.chosen_seats.length * ticket.price
  ticket_history.save()


  res.status(200).json({
    status: 'success',
  })
})

export { getAll, getBySearch, updateStage, deleteItem, getTicketSeat, update }
