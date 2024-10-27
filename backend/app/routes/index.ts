import {Router } from "express";

import ProductRouter from "./product.route";
import UserRouter from "./user.route";

const router = Router();

router.use("/product", ProductRouter);
router.use("/user", UserRouter);

export default router;