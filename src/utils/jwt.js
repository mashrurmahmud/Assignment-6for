import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const secret_key=process.env.JWT_SECRET;


export const  signAuthToken =(payload)=>{
    const token = jwt.sign({payload}, secret_key, {expiresIn:"6hr"});
    return token;

}