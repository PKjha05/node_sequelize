import express from "express";
import { data } from "./controllers/productcontroller/productControllers.js";

const productRoutes = express.Router();

productRoutes.get("/addData", (req, res) => {
  data(req, res);
});
// productRoutes.get("/getDataById/:productId", (req, res) => {
//   getDataById(req, res);
// });

export default productRoutes;
