import { User } from '@/app/models/user';
import { NextResponse } from 'next/server';


// export const GET = () =>{

// }arrow function
// single get user
export async function GET(){

}

// delete user
export async function DELETE(request, { params }) {
    const {userId} = params;

    try{
        await User.deleteOne({
            _id:userId
        })
        return NextResponse.json({
            message: "user deleted",
            success:true,
        });

    }catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Error in deleting user !!",
            success: false,
        });
    }
    return NextResponse.json({
        message:"testing delete",
    });
 
}
