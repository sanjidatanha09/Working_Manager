import mongoose, { Schema } from "mongoose";

const TaskSchema= new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required!"]
    },
    content: {
        type: String,
        required: [true, "content is required!"]
    },
    addedDate: {
        type: String,
        required: [true, "date is required!"],
       default:Date.now(),
    },
    status: {
        type: String,
        enum:["pending","completed"],
        default:"pending",
    },
    userId: {
        type: mongoose.ObjectId,
        required: [true, "userId is required!"]
       
    },
    
});

export const Task = mongoose.models.tasks || mongoose.model("tasks", TaskSchema);