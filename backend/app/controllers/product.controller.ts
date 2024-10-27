import { productSchema, productZodSchema } from "~/models/product.model";
import { z } from "zod";
import { type Response } from "express";


class productController {
    async create(data: z.infer<typeof productZodSchema>, callback: Response) {
        const new_product = new productSchema({ ...data });
        try {
            await new_product.save();
            callback.status(201).json(new_product);
        } catch (error : any) {
            callback.status(400).json({ error: error.message });
        }
    }
}

export default new productController();
