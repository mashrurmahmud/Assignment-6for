
export const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message:err.message || "Internal Server Error",
        stack: process.env.NODE_ENV === "production" ? null : err.stack

    })
}


export const notFound = (req, res, next)=>{
     try{
        if(res.statusCode === 200){
             res.status(404).json({message:"Route Not Found"});
            
        }
     }catch(err){
        console.error("Error in notFound middleware:", err);
        next();
     }
}



