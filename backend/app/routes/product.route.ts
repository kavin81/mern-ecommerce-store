import { Router } from "express";
import { productController } from "~/controllers";
import { productZodSchema } from "~/models/product.model";
import type { Request, Response } from "express";

const router = Router();



router.get("/create", (req: Request, res: Response) => {
    const validation = productZodSchema.safeParse(req.body);
    if (validation.success) {
        productController.create(validation.data, res);
    } else {
        res.status(400).json(validation.error);
    }
});


export default router;
