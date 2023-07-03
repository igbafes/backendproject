  const mongoose = require('mongoose');
  require('dotenv').config();
//  dotenv.config();
 const MONGODB_URL = process.env.MONGODB_URL;
 
 const connectDB = async() => {
   try{
     const conn = await mongoose.connect(MONGODB_URL, {
       useNewUrlParser: true, useUnifiedTopology: true
     });
     console.log(`mongodb connected successfully: ${conn.connection.host}`);

   } catch (error){
    console.log('connection error');
   }

 }

module.exports = connectDB