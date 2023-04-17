import Product from "../models/ProductModel.js";
//import apiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";

const getProducts = asyncHandler(async (req, res) => {
    // find() returns all entries; optionally limit the number of entries returned
    const products = await Product.find(); //.limit(3);

    res.json(products);
});

const createProduct=asyncHandler(async(req,res)=>{
    res.send("product created")
})

const getSingleProduct=asyncHandler(async(req,res)=>{
    res.send("one product")
})

const updateSingleProduct=asyncHandler(async(req,res)=>{
    res.send("product updated")
})

const deleteProduct=asyncHandler(async(req,res)=>{
    res.send("product deleted")
})

export { getProducts, createProduct,getSingleProduct,updateSingleProduct,deleteProduct};