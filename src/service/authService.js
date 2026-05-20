
import userRepo from "../repository/authUserRepo.js";
import bcrypt from "bcryptjs";
export const findUserByEmail =async(email)=>{
     const user = await userRepo.findUserByEmail(email);
     return user;
}

export const createUser = async(email, password)=>{
    // const user = await userRepo.createUser({email, password});
    // return user;
    const user = await userRepo.findUserByEmail(email);
    const hasedPassword = await bcrypt.hash(password, 10);
    const newUser = await userRepo.createUser({email, password:hasedPassword});
    return newUser
    
}
export const login = async(email, password)=>{
     const user = await userRepo.findUserByEmail(email);
     const checkedHashedPassword = await bcrypt.compare(password, user?.password);
     if(checkedHashedPassword && user) return user;
}

export const getLoginUser = async()=>{
     return await userRepo.getLoginUser();
}

export default{
    findUserByEmail,
    createUser,
    getLoginUser ,
    login
}