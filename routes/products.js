import { Router } from "express";
import { getProducts, createProduct, getProductById, deleteProductById } from "../controller/products.js";


const productRoutes = new Router();

productRoutes.route("/").get(getProducts).post(createProduct);
productRoutes.route("/:id").get(getProductById).put().delete(deleteProductById)

export default productRoutes;