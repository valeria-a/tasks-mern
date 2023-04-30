"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskController = exports.getTasksController = void 0;
const taskHandler_1 = require("../handlers/taskHandler");
const bodyValidations_1 = require("../middlewares/bodyValidations");
const getTasksController = (req, res) => {
    try {
        const queryParams = req.query;
        const { user_id } = queryParams;
        const result = (0, taskHandler_1.getTasksHandler)(String(user_id));
        console.log(queryParams);
        res.status(200).json({
            status: 'success',
            result
        });
    }
    catch (error) {
        console.error(`Error in getTasksController: ${error.stack}`);
        res.status(500).json({
            status: 'fail',
            error: error.message
        });
    }
};
exports.getTasksController = getTasksController;
const createTaskController = (req, res) => {
    try {
        const body = bodyValidations_1.createTaskBodySchema.parse(req.body);
        const { title, description, isDone, user_id } = body;
        const result = (0, taskHandler_1.createTaskHandler)({
            title,
            description,
            isDone,
            user_id
        });
        const returnJson = {
            status: result ? 'success' : 'fail',
            message: result ? 'task created successfully' : 'did not create'
        };
        res.status(result ? 200 : 400).json(returnJson);
    }
    catch (error) {
        console.error(`Error in createTaskController: ${error}`);
    }
};
exports.createTaskController = createTaskController;
