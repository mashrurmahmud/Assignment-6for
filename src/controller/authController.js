
import authService from "../service/authService.js";

export const register = async(req,res)=>{
     
    const {email, password} = req.body;
    

    if(!email || !password){
        return res.status(400).json({message:"Email and password are required"});
    }
    if(password.length < 6){
        return res.status(400).json({message:"Password must be at least 6 characters long"});
    }
    const userExistedEmail = await authService.findUserByEmail(email);
    if(userExistedEmail){
        return res.status(400).json({message:"Email already exists"});
    }
  
    
        const user = await authService.createUser(email, password);
        if(user){
            return res.status(201).json({
                message:"User registered successfully",
                success:true,
            

            })
        }
    

    

}

export const login = async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message:"Email and password are required"});
    }
    const user = await authService.login(email, password);
    if(user){
        return res.status(200).json({
            message:`User loggin in successfully`,
            success:true

        })
    }


}

export const getLoginUser = async(req, res)=>{
   
    const getUser = await authService.getLoginUser();
    if(getUser){
        return res.status(200).json({
            message:"All user login data",
            data:getUser

        })
    }
}


export default {
    register,
    login,
    getLoginUser
}