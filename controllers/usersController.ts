import {Request, Response} from "express";
import {createTaskBodySchema, signuupBodySchema} from "../middlewares/bodyValidations";
import {createTaskHandler} from "../handlers/taskHandler";
import {signupHandler} from "../handlers/userHandler";

export const signupController = async (req: Request, res: Response) => {
    try{
        const body = signuupBodySchema.parse(req.body)
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
        console.error(`Error in createTaskController: ${error}`)
        res.status(400).json({
            status: 'error',
            message: error
        })
    }
}