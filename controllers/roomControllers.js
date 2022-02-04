import catchAsyncError from '../middlewares/catchAsyncError';
import Room from '../models/room';
import ErrorHandler from '../utils/errorHandler';

// All rooms
const allRooms = catchAsyncError(async (req, res) => {
  const rooms = await Room.find();
  res.status(200).json({
    success: true,
    count: rooms.length,
    rooms,
  });
});

// new room creation
const newRoom = catchAsyncError(async (req, res) => {
  const room = await Room.create(req.body);

  res.status(200).json({
    success: true,
    room,
  });
});

// Room details
const roomDetails = catchAsyncError(async (req, res, next) => {
  const room = await Room.findById(req.query.id);

  if (!room) {
    return next(new ErrorHandler('Room has not been found with this id', 404));
  }

  res.status(200).json({
    success: true,
    room,
  });
});

// Update room info
const updateRoom = catchAsyncError(async (req, res) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
    // return res.status(400).json({
    //   success: false,
    //   error: 'Room has not been found with this id',
    // });
    return next(new ErrorHandler('Room has not been found with this id', 404));
  }

  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    room,
  });
});

// Delete room info
const deleteRoom = catchAsyncError(async (req, res) => {
  let room = await Room.findById(req.query.id);

  if (!room) {
    // return res.status(400).json({
    //   success: false,
    //   error: 'Room has not been found with this id',
    // });
    return next(new ErrorHandler('Room has not been found with this id', 404));
  }

  await room.remove();
  res.status(200).json({
    success: true,
    message: 'Room has been deleted',
  });
});

export { allRooms, newRoom, roomDetails, updateRoom, deleteRoom };
