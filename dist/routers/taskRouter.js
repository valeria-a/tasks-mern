"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskRouter = void 0;
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
exports.taskRouter = (0, express_1.Router)();
exports.taskRouter.get("/", taskController_1.getTasksController);
exports.taskRouter.post("/", taskController_1.createTaskController);
