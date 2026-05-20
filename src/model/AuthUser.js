import mongoose from "mongoose"



const UserSchema = mongoose.Schema(
    { 
    name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    },
    phoneNumber:{
        type:String,
        length:[11,"Phone number must be 12 or 11 digit"]
    }
}
)






const user = mongoose.model('User', UserSchema);

export default user;