import { NextResponse } from "next/server";
import { POST } from "../users/route";


export default async function POST(request) {
    const {email,password} = await request.json;
    try{
         
          const createUser = await user.save()
          const response = NextResponse.json(user, {
              status: 201,
          });
          return response;
      }catch(error){
          console.log(error)
          return NextResponse.json({
              message:"failed to login!!",
              status:false,
          });
      }

}