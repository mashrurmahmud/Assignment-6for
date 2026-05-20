import user from "../model/AuthUser.js";


export const findUserByEmail = async(email)=>{
     
    const found = await user.findOne({email});
    return found;

    
  
}


export const login = async(email, password)=>{
    const loggedIn = await user.findOne({email, password});
    return loggedIn;

}



export const createUser = async(userData)=>{
    const newUser = new user(userData);  // Create a new instance of the user model with the provided data
    await newUser.save();
    return newUser;
}

export const getLoginUser = async()=>{
    const getUser = await user.find();
    return getUser;

}

export default {
    findUserByEmail,
    createUser,
    login,
    getLoginUser
}

