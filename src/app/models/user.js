import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
     
    name:String,
    email:{
        type:String,
        required:[true,"Email Required !!"],
    },
    password:{
        type:String,
        require:[true,"Password required !!"],
    },
   about: String,
    profileURL: String,
    // password: {
    //     type: String,
    //     require: [true, "Password required !!"],
    // }
})
export const User = mongoose.models.users || mongoose.model("users",UserSchema);