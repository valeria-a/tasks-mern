"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.signupController = void 0;
const bodyValidations_1 = require("../middlewares/bodyValidations");
const userHandler_1 = require("../handlers/userHandler");
const signupController = async (req, res) => {
    try {
        const body = bodyValidations_1.authBodySchema.parse(req.body);
        const { email, password } = body;
        const result = await (0, userHandler_1.signupHandler)({
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
        console.error(`Error in ${exports.signupController.name}: ${error.stack}`);
        res.status(500).json({
            status: 'fail',
            message: error
        });
    }
};
exports.signupController = signupController;
const loginController = async (req, res) => {
    try {
        const body = bodyValidations_1.authBodySchema.parse(req.body);
        const { email, password } = body;
        const result = await (0, userHandler_1.loginHandler)({
            email,
            password
        });
        res.status(result ? 200 : 400).json(result);
    }
    catch (error) {
        console.error(`Error in ${exports.loginController.name}: ${error.stack}`);
        res.status(500).json({
            status: 'fail',
            message: error
        });
    }
};
exports.loginController = loginController;
