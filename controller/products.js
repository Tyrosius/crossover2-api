import Product from "../models/productModel.js";
//import apiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";

const getProducts = asyncHandler(async (req, res) => {
    // find() returns all entries; optionally limit the number of entries returned
    const products = await Product.find(); //.limit(3);

    res.json(products);
});

const createProduct = asyncHandler(async (req, res) => {
    const { title, price, quantity, rating, image } = req.body;
    const newProduct = await Product.create({
      title,
      price,
      quantity,
      rating,
      image
    });
    res.status(201).json(newProduct);
  });

  // TODO - currently throwing this error:
  // 	"error": "Cast to ObjectId failed for value \"{ id: '643d21f6364e4842cfef2461' }\" (type Object) at path \"_id\" for model \"Product\""
const getProductById = async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById({ _id: id });

        if (!product) {
            return res.status(404).json({ message: "No products found."})
        }
        res.json(product);
    } catch(err) {
            res.status(500).json({ error: err.message });
    }
}

const updateSingleProduct=asyncHandler(async(req,res)=>{
    res.send("product updated")
})

const deleteProductById = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(
            { _id: id }
        );
        if (!deletedProduct) {
            res.status(500).json({ message: "Product not found."})
        }
        return res.json(deletedProduct);
    } catch(err) {
            res.status(500).json({ error: err.message });
    }
}

export { getProducts, createProduct, getProductById, updateSingleProduct, deleteProductById};