import { Router } from "express";
import { getUsers, createUser,getSingleUser,updateSingleUser,deleteUser, signIn } from "../controller/user.js";

const userRoutes = new Router();

userRoutes.route("/").get(getUsers);
userRoutes.post("/login",signIn);
userRoutes.post("/signUp",createUser);
/* userRoutes.route("/:id").get(getSingleUser).put(updateSingleUser).delete(deleteUser); */

export default userRoutes;