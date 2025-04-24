import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required!"],
        match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
    },
    password: {
        type: String,
        required: [true, "Password is required!"],
    },
    about: String,
    profileURL: String,
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
