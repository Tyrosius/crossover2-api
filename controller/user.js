import User from "../models/user.js";
//import apiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from '../utils/ErrorResponse.js';
import { createJWT, hashPassword, comparePasswords } from '../utils/auth.js';

const getUsers = asyncHandler(async (req, res) => {
    // find() returns all entries; optionally limit the number of entries returned
    const Users = await User.find(); //.limit(3);

    res.json(Users);
});

const createUser=asyncHandler(async(req,res)=>{
    const {
        body: { email, password },
      } = req;
      const found = await User.findOne({ email });
      if (found) throw new Error('User already exists', 400);
      const hash = await hashPassword(password);
    
      const user = await User.create({
        email,
        password: hash,
      });
      const token = createJWT(user._id);
      res.json({ token });
})

const signIn = asyncHandler(async (req, res) => {
    const {
      body: { email, password },
    } = req;
    const found = await User.findOne({
      email: email,
    }).select('+password');
    if (!found) throw new ErrorResponse("User doesn't exists", 404);
    const isValid = comparePasswords(password, found.password);
    if (!isValid) throw new ErrorResponse('Incorrect password', 401);
    const token = createJWT(found._id);
    res.json({ token });
  });
/* later */
const getSingleUser=asyncHandler(async(req,res)=>{
    res.send("one User")
})

const updateSingleUser=asyncHandler(async(req,res)=>{
    res.send("User updated")
})

const deleteUser=asyncHandler(async(req,res)=>{
    res.send("User deleted")
})

export { signIn,getUsers, createUser,getSingleUser,updateSingleUser,deleteUser};