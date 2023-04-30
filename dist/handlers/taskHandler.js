"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskHandler = exports.getTasksHandler = void 0;
const taskDAL_1 = require("../DAL/taskDAL");
const getTasksHandler = (user_id) => {
    const dbResult = (0, taskDAL_1.getTasksDAL)(user_id);
    const displayedTasks = dbResult.map((task) => {
        const { title, description, isDone } = task;
        return {
            title,
            description,
            isDone
        };
    });
    console.log(`Displayed tasks: ${displayedTasks}`);
    return displayedTasks;
};
exports.getTasksHandler = getTasksHandler;
const createTaskHandler = (task) => {
    const dbResult = (0, taskDAL_1.createTaskDAL)(task);
    return dbResult;
};
exports.createTaskHandler = createTaskHandler;
