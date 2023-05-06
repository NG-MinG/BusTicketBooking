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
  // const search = req.body.search.toLowerCase()
  // const schedule_filter = []
  // const schedules = await Schedule.find()
  // for (let i of schedules) {
  //   if (i.departure_city.toLowerCase().includes(search) || i.arrival_city.toLowerCase().includes(search)) {
  //     schedule_filter.push(i)
  //   }
  // }
  // res.status(200).json({
  //   status: 'success',
  //   data: { schedule_filter }
  // })
})

const updateStage = catchAsync(async (req, res) => {
  const ticketHistory = await TicketHistory.findById(req.body.id);
  ticketHistory.stage = req.body.stage;
  ticketHistory.save()
})

export { getAll, getBySearch, updateStage }