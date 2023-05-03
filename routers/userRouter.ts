import {Router} from "express";
import {loginController, signupController} from "../controllers/usersController";

export const userRouter: Router = Router();

userRouter.post("/signup", signupController)
userRouter.post("/login", loginController)
