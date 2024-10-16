const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    // No need to pass the deprecated options here
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
