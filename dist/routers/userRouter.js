"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post("/signup", usersController_1.signupController);
