import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import {User} from "../../models/user";
import bcrypt from "bcryptjs";
connectDb();

export async function GET(request) {
    let users={}
    try{
        users=await User.find()

    }catch(error){

        console.log(error);
        return NextResponse.json({
            message:"failed to geet users",
            success:false,
        })

    }
    return NextResponse.json(users);


}



// export function GET(request) {
//     const users = [
//         {
//             name: 'durgesh tiwari',
//             phone: "2525",
//             course: "java"

//         },
//         {
//             name: 'durgesh tiwari1',
//             phone: "2526",
//             course: "next js"

//         },
//         {
//             name: 'durgesh tiwari2',
//             phone: "2527",
//             course: "cpp"

//         },

//     ];
//     return NextResponse.json(users);


// }

export async function POST(request) {
    // fetch user details from request
    const {name,email,password,about,profileURL}=await request.json();
    console.log({ name, email, password, about, profileURL })

    const user=new User({
        name, email, password, about, profileURL
    })

    try{
        //SAVE the object to database
        user.password = bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT));
        console.log(user);
        const createUser = await user.save()
        const response = NextResponse.json(user, {
            status: 201,
        });
        return response;
    }catch(error){
        console.log(error)
        return NextResponse.json({
            message:"failed to create user!!",
            status:false,
        });
    }
    
    // const body=request.body
    // console.log(body)
    // console.log(request.method);
    // console.log(request.cookies);
    // console.log(request.headers);
    // console.log(request.nextUrl.pathname);
    // const jsonData = await request.json();
    
    // const textData= await request.text();
    // console.log(jsonData);
    // console.log(textData);

    // return NextResponse.json({
    //     message: "Posting user data",

    // });

}

export function DELETE(request) {
    console.log("delete api called");
    return NextResponse.json({
        message: "deleted !!",
        status: true,
    },
        {
            status: 201, statusText: "status text"
        });

}

export function PUT() {

}