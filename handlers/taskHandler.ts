import {createTaskDAL, getTasksDAL} from '../DAL/taskDAL';
import {ITask, ITaskDisplay} from "../interfaces/tasks";

export const getTasksHandler = (user_id: string): ITaskDisplay[]=>{
    const dbResult: ITask[] = getTasksDAL(user_id)
    const displayedTasks = dbResult.map((task: ITask): ITaskDisplay => {
        const {title, description, isDone} = task
        return {
            title,
            description,
            isDone
        }
    })
    console.log(`Displayed tasks: ${displayedTasks}`)
    return displayedTasks
}

export const createTaskHandler = (task: ITask) => {
    const dbResult = createTaskDAL(task);
    return dbResult;

}
