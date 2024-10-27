import { Router } from "express";
import { userController } from "~/controllers";
import { userZodSchema } from "~/models/user.model";
import type { Request, Response } from "express";

const router = Router();


router.get("/create", (req: Request, res: Response) => {
    const validation = userZodSchema.safeParse(req.body);
    if (validation.success) {
        userController.create(validation.data, res);
    } else {
        res.status(400).json(validation.error);
    }
});


export default router;
