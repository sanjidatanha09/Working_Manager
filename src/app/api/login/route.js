import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, password } = body;

        // Step 1: Find the user by email
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return new Response(JSON.stringify({ error: "User not found" }), {
                status: 404,
            });
        }

        // Step 2: Compare password
        const matched = bcrypt.compareSync(password, user.password);
        if (!matched) {
            return new Response(JSON.stringify({ error: "Password not matching" }), {
                status: 401,
            });
        }

        // Step 3: If matched, send response
        return new Response(
            JSON.stringify({ message: "Login successful", user }),
            { status: 200 }
        );

    } catch (error) {
        console.error("Login error:", error.message);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
}
