import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  fullname: {
    type: String
    //required: [true, 'Please tell us your name!']
  },
  username: String,
  password: {
    type: String,
    //required: [true, 'Please provide a password'],
    minlength: 8,
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  phone: String,
  email: {
    type: String,
    //required: [true, 'Please provide your email'],
    //unique: true,
    lowercase: true
    //validate: [validator.isEmail, 'Please provide a valid email']
  },
  dob: String,
  address: String,
  gender: String,
  avatar: String,


  passwordChangedAt: Date,
  userVerifyToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true
  }
});

// compare password
userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('users', userSchema);

export default User;