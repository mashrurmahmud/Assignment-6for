
import courseRepo from "../repository/courseRepo.js";

export const createBook = async(book)=>{
    const books = await courseRepo.createBook(book);
    return books;

}

export const  getAllCourse = async()=>{
    const course = await courseRepo.getAllCourse();
    return course;
}

export const getOneCourse = async(id,instructorName)=>{
    const course = await courseRepo.getOneCourse(id,instructorName);
    return course;
}

export const updateCourse = async(id)=>{
    const course = await courseRepo.updateCourse(id);
    return course;
}

export const deleteCourse = async(id)=>{
    const course = await courseRepo.deleteCourse(id);
    return course
}


export default {
    createBook,
    getAllCourse,
    getOneCourse,
    updateCourse,
    deleteCourse,
}


