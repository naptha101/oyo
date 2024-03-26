import mongoose from "mongoose";
import userModel from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ConnectDb from "@/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { email, password } = req.body;
        ConnectDb();
        console.log(email+" "+password);
            // Find the user with the provided email
            const user = await userModel.findOne({ email: email });

            // If user is not found, return error
            if (!user) {
                return res.status(400).json({ message: "Invalid email or password" });
            }

            // Compare the provided password with the stored hashed password
            const passwordMatch = await bcrypt.compare(password, user.password);

            // If passwords do not match, return error
            if (!passwordMatch) {
                return res.status(400).json({ message: "Invalid email or password" });
            }

            // Generate JWT token
            const token = jwt.sign({ userId: user._id }, "Secret", { expiresIn: "2d" });

            // Return token to client
            return res.status(200).json({ token: token,user:user });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal server error" });
        }
    } else {
        return res.status(405).json({ message: "Method Not Allowed" });
    }
}
