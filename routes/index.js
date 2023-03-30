import { Router } from "express";
import productsRotes from "./product.js";

const router = Router();
router.use("/product", productsRotes);

export default router;
