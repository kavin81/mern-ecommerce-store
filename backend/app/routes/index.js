import {Router } from "express";

import ProductRouter from "./product.route.js";
import UserRouter from "./user.route.js";

const router = Router();

router.use("/product", ProductRouter);
router.use("/user", UserRouter);

export default router;