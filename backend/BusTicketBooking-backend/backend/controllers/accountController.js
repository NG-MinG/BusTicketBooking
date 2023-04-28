import User from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";

const getAllAccount = catchAsync(async (req, res) => {
    const account = await User.find()
    // console.log(schedules)
    res.status(200).json({
      status: 'success',
      data: { account }
    })
  })

export {getAllAccount}
  