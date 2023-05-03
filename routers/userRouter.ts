import {Router} from "express";
import {signupController} from "../controllers/usersController";

export const userRouter: Router = Router();

userRouter.post("/signup", signupController)
