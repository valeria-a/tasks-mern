import {Request, Response} from "express";
import {authBodySchema} from "../middlewares/bodyValidations";
import {loginHandler, signupHandler} from "../handlers/userHandler";
import {ILoginHandlerResult} from "../interfaces/users";
import {createTaskController} from "./taskController";

export const signupController = async (req: Request, res: Response) => {
    try{
        const body = authBodySchema.parse(req.body)
        const {email, password} = body;
        const result = await signupHandler({
            email,
            password
        })
        const returnJson = {
            status: result.success ? 'success' : 'fail',
            message: result.success ? 'task created successfully' : 'did not create'
        }
        res.status(result ? 200 : 400).json(returnJson)
    } catch (error: any) {
        console.error(`Error in ${signupController.name}: ${error.stack}`)
        res.status(500).json({
            status: 'fail',
            message: error
        })
    }
}

export const loginController = async (req:Request, res:Response) => {
    try {
        const body = authBodySchema.parse(req.body)
        const {email, password} = body;
        const result: ILoginHandlerResult = await loginHandler({
            email,
            password
        })
        res.status(result ? 200 : 400).json(result)
    } catch (error: any) {
        console.error(`Error in ${loginController.name}: ${error.stack}`)
        res.status(500).json({
            status: 'fail',
            message: error
        })
    }
}