import mongoose from "mongoose";
import { z } from "zod";

export const productZodSchema = z.object({
    name: z.string(),
    description: z.string(),
    image: z.array(z.string()),
    rating: z.number().positive().min(0).max(5),
    price: z.number().positive(),
    brand: z.string(),
    category: z.string(),
    countInStock: z.number().positive(),
});

export const productSchema = mongoose.model(
    "Product",
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: [String],
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        countInStock: {
            type: Number,
            required: true,
        },
    })
);
