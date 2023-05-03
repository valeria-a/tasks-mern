"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupController = void 0;
const bodyValidations_1 = require("../middlewares/bodyValidations");
const userHandler_1 = require("../handlers/userHandler");
const signupController = (req, res) => {
    try {
        const body = bodyValidations_1.signuupBodySchema.parse(req.body);
        const { email, password } = body;
        const result = (0, userHandler_1.signupHandler)({
            email,
            password
        });
        const returnJson = {
            status: result.success ? 'success' : 'fail',
            message: result.success ? 'task created successfully' : 'did not create'
        };
        res.status(result ? 200 : 400).json(returnJson);
    }
    catch (error) {
        console.error(`Error in createTaskController: ${error}`);
        res.status(400).json({
            status: 'error',
            message: error
        });
    }
};
exports.signupController = signupController;
