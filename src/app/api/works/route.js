import { NextResponse } from "next/server";

export function GET(request){
    return NextResponse.json({
        message:"works api getting data",
    });
}