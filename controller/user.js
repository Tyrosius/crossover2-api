import User from "../models/UserModel.js";
//import apiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";

const getUsers = asyncHandler(async (req, res) => {
    // find() returns all entries; optionally limit the number of entries returned
    const Users = await User.find(); //.limit(3);

    res.json(Users);
});

const createUser=asyncHandler(async(req,res)=>{
    res.send("User created")
})

const getSingleUser=asyncHandler(async(req,res)=>{
    res.send("one User")
})

const updateSingleUser=asyncHandler(async(req,res)=>{
    res.send("User updated")
})

const deleteUser=asyncHandler(async(req,res)=>{
    res.send("User deleted")
})

export { getUsers, createUser,getSingleUser,updateSingleUser,deleteUser};