import catchAsync from "../utils/catchAsync.js"
import TicketHistory from "../models/ticketHistoryModel.js"

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
})

export { getAll, getBySearch, updateStage }