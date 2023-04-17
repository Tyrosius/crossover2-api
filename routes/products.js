import { Router } from "express";
import { getProducts, createProduct, getProductById } from "../controller/products.js";


const productRoutes = new Router();

productRoutes.route("/").get(getProducts).post(createProduct);
productRoutes.route("/:id").get(getProductById).put().delete()

export default productRoutes;