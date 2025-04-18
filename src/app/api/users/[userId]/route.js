import { NextResponse } from 'next/server';

export async function DELETE(request, { params }) {
    const userId = params.userId;
    console.log("user id", userId);

    return NextResponse.json({
        message: "User deleted",
        userId,
    });
}
