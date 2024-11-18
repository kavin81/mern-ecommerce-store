import { Router } from "express";
import { userController } from "../controllers/index.js";
import { userZodSchema } from "../models/user.model.js";

const router = Router();

router.post("/signup", (req, res) => {
    const validation = userZodSchema.safeParse(req.body);
    if (validation.success) {
        userController.signup(validation.data, res);
    } else {
        res.status(400).json(validation.error);
    }
});

router.post("/login", (req, res) => {
    const validation = userZodSchema
        .pick({ email: true, password: true })
        .safeParse(req.body);
    if (validation.success) {
        userController.signin(validation.data, res);
    } else {
        res.status(400).json(validation.error);
    }
});

export default router;
