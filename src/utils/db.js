import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const port = process.env.PORT || 5000;

export const connectDB = async(mongourl)=>{
    try{
       await  mongoose.connect(mongourl);
       
        
    }catch(error){
        console.error("Error connecting to MongoDB:", error);
        
    }
}

