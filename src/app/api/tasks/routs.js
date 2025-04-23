
import { Task } from "@/app/models/task";
import { NextResponse } from "next/server";

//get all the task
export async function GET(request) {
   try{
    const tasks=await Task.find();
       return NextResponse.json(tasks);
   }
   catch(error){
    console.log(error)
       return NextResponse.json(tasks);
   }
    // return NextResponse.json(task);


}

export async function POST(request) {
    const { title, content, userId } = await request.json();

    if (!title || !content || !userId) {
        return NextResponse.json({ message: "All fields are required", status: false }, { status: 400 });
    }

    try {
        const tasks = new Task({ title, content, userId });
        const createdTask = await tasks.save();

        return NextResponse.json(createdTask, { status: 201 });

    } catch (error) {
        console.error("Task creation error:", error);
        return NextResponse.json({ message: "Failed to create task!", status: false }, { status: 500 });
    }
}