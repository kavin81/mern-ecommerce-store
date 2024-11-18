import { Router } from "express";
import { productController } from "../controllers/index.js";
import { productZodSchema } from "../models/product.model.js";

const router = Router();



router.get("/create", (req, res) => {
    const validation = productZodSchema.safeParse(req.body);
    if (validation.success) {
        productController.create(validation.data, res);
    } else {
        res.status(400).json(validation.error);
    }
});

router.get("/getAll", (req, res) => {
    productController.getAll(res);
});

router.get("/getOne/:id", (req, res) => {
    productController.getOne(req.params.id, res);
});

export default router;
