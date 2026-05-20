import mongoose from "mongoose";



const courseSchema = new mongoose.Schema({
    title:String,
    description:{
        type:String,
        required:true,
        length:[100, "Description must be at least 100 characters long"]
    },
    price:{
        type:Number,
        required:true,
        min:[0, "Price must be a positive number"]
    },
    duration:{
        type:Number,
        required:true,
        min:[0, "Duration must be a positive number"]
    },
    instructorName:String,
    courseImage:String

},{
    timestamps:true
})


const courseModel = mongoose.model("Course", courseSchema);

export default courseModel;
