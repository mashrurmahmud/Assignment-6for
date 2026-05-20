
import courseService from "../service/courseService.js"



export const createBook=async(req, res ,next)=>{
     const book = req.body;
    
     const bookCreate = await courseService.createBook(book);
     try{
        if(bookCreate){
        return res.status(201).json({
            message:"Book is created successfully",
            success:true,
            data:bookCreate
        })
     }
     }catch(err){
        throw new Error(err)
         return  res.status(400).json({
            message:"Something went wrong , try again later",
            success:false
        })
     }
     
}
export const getAllCourse = async(req,res)=>{
    const getCourse = req.body;
    const getcourse = await courseService.getAllCourse();
    return getcourse;
    
}

export const deleteCourse = async(req)

export const updateCourse = async(req,res)=>{
    const getCourseId = req.params.id;
    const {instructorName} = req.body;
    const getAllcours= await courseService.updateCourse(getCourseId,instructorName);
    return getAllCourse;
}
export const getOneCourse = async(req, res)=>{
    const id = req.params.id;
    const getOne = await courseService.getOneCourse(id);
    return getOne;

    
}

export default {
    createBook,
    getAllCourse,
    getOneCourse,
    updateCourse

}