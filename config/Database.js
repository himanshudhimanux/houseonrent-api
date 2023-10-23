const mongoose = require('mongoose');
const colors = require("colors");

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.DB_URI);
        console.log(`Database Connected Successfully: ${conn.connection.host}`.yellow.bold);

    } catch(error){
        console.error(`Error: ${error.message}`.red.bold);
        process.exit();
    }
};

module.exports = connectDB;