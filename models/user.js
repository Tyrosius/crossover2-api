import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema ({
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: [true],
        select:false
    },

})