import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./utils/db.js";
dotenv.config();

// hello


const mongourl = process.env.MONGO_URL;





const port = process.env.PORT || 5000;

const startServer = async()=>{
    try{
        await connectDB(mongourl);
        app.listen(port, ()=>{
            console.log(`Server is running on port ${port}`);
        })

    }catch(err){
        console.error("Error starting server:", err);
        process.exit(1);
    }
}

startServer()