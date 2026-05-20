
import courseRepo from "../repository/courseRepo.js";

export const createBook = async(book)=>{
    const books = await courseRepo.createBook(book);
    return books;

}

export const  getAllCourse = async()=>{
    const course = await courseRepo.getAllCourse();
    return course;
}



export default {
    createBook,
    getAllCourse
}


