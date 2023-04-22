import Schedule from "../models/scheduleModel.js"
import catchAsync from "../utils/catchAsync.js"
import AppError from "../utils/appError.js";

const getAll = catchAsync(async (req, res) => {
  const schedules = await Schedule.find()
  console.log(schedules)
  res.status(200).json({
    status: 'success',
    data: { schedules }
  })
})

export { getAll }