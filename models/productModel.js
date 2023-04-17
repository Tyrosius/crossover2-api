import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true]
    },
    quantity: {
        type: Number,
        required: [true]
    },
    rating: {
        type: String,
        required: [true]
    },
    image: {
        type: String
    }
})


export default model("Product",productSchema)

