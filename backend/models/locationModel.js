import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
<<<<<<< HEAD
    location: String,
})

=======
  location: String,
});
>>>>>>> a84899c888005e56a1caa92f01c071afa0c62b10

const Location = mongoose.model('locations', locationSchema);

export default Location;