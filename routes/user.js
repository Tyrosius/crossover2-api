import { Router } from "express";
import { getUsers, createUser,getSingleUser,updateSingleUser,deleteUser } from "../controllers/userController.js";

const userRoutes = new Router();

userRoutes.route("/").get(getUsers).post(createUser);
userRoutes.route("/:id").get(getSingleUser).put(updateSingleUser).delete(deleteUser);

export default userRoutes;