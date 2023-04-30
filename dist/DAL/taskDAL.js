"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskDAL = exports.getTasksDAL = void 0;
const task1 = {
    title: 'Do homework',
    description: 'page 7',
    isDone: false,
    user_id: '1'
};
const task2 = {
    title: 'Pay bills',
    isDone: false,
    user_id: '2'
};
const tasks = [task1, task2];
const getTasksDAL = (user_id) => {
    const userTasks = tasks.filter((task) => task.user_id === user_id);
    console.log(`getTasksDAL finished ${userTasks}`);
    return userTasks;
};
exports.getTasksDAL = getTasksDAL;
const createTaskDAL = (task) => {
    try {
        tasks.push(task);
        return true;
    }
    catch (error) {
        console.error(`Error inserting task: ${error}`);
        return false;
    }
};
exports.createTaskDAL = createTaskDAL;
