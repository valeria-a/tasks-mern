import {ITask} from "../interfaces/tasks";

const task1:ITask = {
    title: 'Do homework',
    description: 'page 7',
    isDone: false,
    user_id: '1'
}

const task2:ITask = {
    title: 'Pay bills',
    isDone: false,
    user_id: '2'
}

const tasks = [task1, task2];

export const getTasksDAL = (user_id: string)=>{
    const userTasks = tasks.filter((task)=> task.user_id === user_id)
    console.log(`getTasksDAL finished ${userTasks}`)
    return userTasks
}

export const createTaskDAL = (task: ITask)=> {
    try {
        tasks.push(task)
        return true;
    } catch (error: any) {
        console.error(`Error inserting task: ${error}`)
        return false
    }
}