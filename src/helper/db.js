import mongoose from "mongoose";
import { User } from "../app/models/user";

export const connectDb = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "work_manager",
        });
        console.log("✅ DB connected...");

        // Create and save a new user for testing
        const testUser = new User({
            name: "test name",
            email: "test@gmail.com",
            password: "testpassword",
            about: "this is testing",
        });

        await testUser.save();
        console.log("✅ Test user created");

    } catch (error) {
        console.log("❌ Failed to connect with database");
        console.error(error);
    }
};
