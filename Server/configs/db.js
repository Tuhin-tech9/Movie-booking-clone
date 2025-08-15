

import mongoose from "mongoose";
import dotenv from 'dotenv'


const connectdb =async()=>{
    try {
        mongoose.connection.on('connected', ()=>console.log("db connected"))
        await mongoose.connect(`${process.env.MONGO_URL}`)
       
    } catch (error) {
        console.log("db is not connected")
    }
}


export default connectdb;