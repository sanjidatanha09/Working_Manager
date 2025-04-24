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


// export async function POST(request) {
//     // fetch user details from request
//     const {name,email,password,about,profileURL}=await request.json();
//     console.log({ name, email, password, about, profileURL })

//     const user=new User({
//         name, email, password, about, profileURL
//     })

//     try{
//         //SAVE the object to database
//         user.password = bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT));
//         console.log(user);
//         const createUser = await user.save()
//         const response = NextResponse.json(user, {
//             status: 201,
//         });
//         return response;
//     }catch(error){
//         console.log(error)
//         return NextResponse.json({
//             message:"failed to create user!!",
//             status:false,
//         });
//     }
    
   

// }

export async function POST(request) {
   

    const { name, email, password, about, profileURL } = await request.json();
    console.log({ name, email, password, about, profileURL });

    try {
        // 🔍 Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json(
                { message: "Email already exists", status: false },
                { status: 409 } // 409 = Conflict
            );
        }

        // 🔐 Hash password
        const hashedPassword = bcrypt.hashSync(password, parseInt(process.env.BCRYPT_SALT) || 10);

        const user = new User({
            name,
            email,
            password: hashedPassword,
            about,
            profileURL,
        });

        const createdUser = await user.save();

        return NextResponse.json(
            {
                message: "User created successfully",
                user: {
                    _id: createdUser._id,
                    name: createdUser.name,
                    email: createdUser.email,
                },
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            {
                message: "Failed to create user",
                status: false,
                error: error.message,
            },
            { status: 500 }
        );
    }
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