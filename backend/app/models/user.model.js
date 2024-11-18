import mongoose from "mongoose";
import { z } from "zod";

export const userZodSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    isAdmin: z.boolean().optional().default(false),
});

export const userSchema = mongoose.model(
    "User",
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    })
);
