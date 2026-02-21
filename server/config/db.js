const mongoose = require('mongoose');
const dns = require('dns');

const connectDB = async () => {

  try {
    // Set DNS servers to Google DNS to resolve Atlas SRV records
    dns.setServers(['8.8.8.8']);
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }

}

module.exports = connectDB;
