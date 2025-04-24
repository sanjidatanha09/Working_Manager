import { User } from "@/app/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import  jwt  from "jsonwebtoken";



export async function POST(request) {
    const {email,password} = await request.json;
   
    try{
         //step 1
          const user = await User.findOne({
            email:email,
          });
          console.log(user)
          if(user==null){
            throw new Error("user not found !!");
          }
          //step 2 password check
          const matched = bcrypt.compareSync(password,user.password)
          if(!matched){
            throw new Error("password not matcing");
          }
          //step 3 token generate
          const token= jwt.sign({
            _id:user._id,
            name:user.name
          }, process.env.JWT_KEY);

          //4create next response cookie
          const response=NextResponse.json({
            message:"Login success",
            success:true


          })
          response.cookies.set("authToken",token,{
            expiresIn:"1d",
            httpOnly:true,
          })
          console.log(token)

          return response;


      }catch(error){
          console.log(error)
          return NextResponse.json({
              message:error.message,
              success:false,
          },
        {
            status:500,
        });
      }

}