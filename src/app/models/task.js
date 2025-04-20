import mongoose, { Schema } from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"]
    },
    content: {
        type: String,
        required: [true, "Content is required!"]
    },
    addedDate: {
        type: Date,
        required: true,
        default: Date.now, // use function, not value
    },
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending",
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "User ID is required!"],
        ref: "User"
    },
});

export const Task = mongoose.models.tasks || mongoose.model("tasks", TaskSchema);
