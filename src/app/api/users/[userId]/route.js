import { NextResponse } from 'next/server';

export async function DELETE(request, { params }) {
    console.log(params);
    const {userId,title} = params;
    console.log("user id", userId);
    console.log(title)

    return NextResponse.json({
        message: "User deleted",
        userId,
    });
}
