import mongoose from 'mongoose';

const stationSchema = new mongoose.Schema({
  location: String,
  stations: [
    {
      name: String,
      address: String,
      phone: String,
    }
  ]
});

const Station = mongoose.model('stations', stationSchema);

export default Station;