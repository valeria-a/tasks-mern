import {ITask} from "../interfaces/tasks";
import {findOneUser, insertNewUser} from "../DAL/collections/users/queries";
import * as bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import {ILoginHandlerResult, IUser} from "../interfaces/users";

const jwtSecret = 'EduLabs'

export const signupHandler = async (user: IUser) => {
    user.password = await bcrypt.hash(user.password, 10)
    const dbResult =  await insertNewUser(user);
    return dbResult;

}

export const loginHandler= async (user: IUser): Promise<ILoginHandlerResult> => {

    // get the user from db
    const userResult = await findOneUser(user.email)
    if (!userResult) return {success: false, message: 'email does not exist in the db'}

    // validate password
    const isPasswordEqual = await bcrypt.compare(user.password, userResult.password)
    if (!isPasswordEqual) return {success: false, message: 'incorrect password'}
    const token = jwt.sign({user_id: userResult._id}, jwtSecret)
    return {
        success: true,
        token
    }
}