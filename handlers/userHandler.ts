import {ITask} from "../interfaces/tasks";
import {insertNewUser} from "../DAL/collections/users/queries";

export const signupHandler = (user: IUser) => {
    const dbResult = insertNewUser(user);
    return dbResult;

}