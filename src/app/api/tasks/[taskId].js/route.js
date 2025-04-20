import { Task } from "@/app/models/task";
import { NextResponse } from "next/server";

// single get task
export async function GET(request, { params }) {
    

}

// delete task
export async function DELETE(request, { params }) {
    
 
}

// Update task

export async function PUT(request, { params }) {
  
   

}

// export async function POST(request) {
//     const { title, content, userId } = await request.json();

//     if (!title || !content || !userId) {
//         return NextResponse.json({ message: "All fields are required", status: false }, { status: 400 });
//     }

//     try {
//         const task = new Task({ title, content, userId });
//         const createdTask = await task.save();

//         return NextResponse.json(createdTask, { status: 201 });

//     } catch (error) {
//         console.error("Task creation error:", error);
//         return NextResponse.json({ message: "Failed to create task!", status: false }, { status: 500 });
//     }
// }