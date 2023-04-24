import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
  departure_city: String,
  arrival_city: String,
  bus_type: {
    type: String,
    enum: ['Ghế', 'Giường', 'Limousine'],
  },
  duration: String,
  distance: String
});

const Schedule = mongoose.model('trips', scheduleSchema);

export default Schedule;