import {ITask} from "../interfaces/tasks";
import {insertNewUser} from "../DAL/collections/users/queries";

export const signupHandler = async (user: IUser) => {
    const dbResult =  await insertNewUser(user);
    return dbResult;

}