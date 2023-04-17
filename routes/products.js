import { Router } from "express";
import { getProducts,createProduct } from "../controllers/productController.js";

const productRoutes = new Router();

productRoutes.route("/").get(getProducts).post(createProduct);
productRoutes.route("/:id").get().put().delete()

export default productRoutes;