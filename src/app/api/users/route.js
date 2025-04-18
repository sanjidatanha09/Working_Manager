import { NextResponse } from "next/server";

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

export function POST() {

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