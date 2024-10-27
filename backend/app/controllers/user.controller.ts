import { userSchema,userZodSchema } from "~/models/user.model";
import { z } from "zod";
import { type Response } from "express";


class userController {
    async create(data: z.infer<typeof userZodSchema>, callback: Response) {
        const new_user = new userSchema({ ...data });
        try {
            await new_user.save();
            callback.status(201).json({
                name: new_user.name,
                email: new_user.email,
            });
        } catch (error : any) {
            callback.status(400).json({ error: error.message });
        }
    }
}

export default new userController();