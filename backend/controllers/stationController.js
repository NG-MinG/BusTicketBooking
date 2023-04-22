import Station from "../models/stationModel.js"
import catchAsync from "../utils/catchAsync.js"

const getAll = catchAsync(async (req, res) => {
  const stations = await Station.find()
  res.status(200).json({
    status: 'success',
    data: { stations }
  })
})

export { getAll }