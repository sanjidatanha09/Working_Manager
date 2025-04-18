import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
connectDb();

export function GET(request) {
    const users = [
        {
            name: 'durgesh tiwari',
            phone: "2525",
            course: "java"

        },
        {
            name: 'durgesh tiwari1',
            phone: "2526",
            course: "next js"

        },
        {
            name: 'durgesh tiwari2',
            phone: "2527",
            course: "cpp"

        },

    ];
    return NextResponse.json(users);


}

export async function POST(request) {
    const body=request.body
    console.log(body)
    console.log(request.method);
    // console.log(request.cookies);
    // console.log(request.headers);
    // console.log(request.nextUrl.pathname);
    // const jsonData = await request.json();
    
    const textData= await request.text();
    // console.log(jsonData);
    console.log(textData);

    return NextResponse.json({
        message: "Posting user data",

    });

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