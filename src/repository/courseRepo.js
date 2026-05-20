import courseModel from "../model/Course.js"


export const createBook =async(book)=>{
     const createBooks = await courseModel.insertOne(book);
     return createBooks;
}
export const getAllCourse = async()=>{
     const getCourse = await courseModel.find();
     return getCourse;
}
export const getOneCourse = async(id)=>{
    const getCourse = await courseModel.findById(id);
    return getCourse;
}

export default {
    createBook,
    getAllCourse,
    getOneCourse
}
