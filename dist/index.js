"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const taskRouter_1 = require("./routers/taskRouter");
const connection_1 = require("./DAL/connection");
const userRouter_1 = require("./routers/userRouter");
// initiate the express app
const app = (0, express_1.default)();
//use the middleware
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, compression_1.default)());
app.use(express_1.default.json());
app.use('/api/tasks', taskRouter_1.taskRouter);
app.use('/api/users', userRouter_1.userRouter);
const connectToDb = async () => {
    try {
        exports.db = await (0, connection_1.establishDBConnection)();
        await (0, connection_1.createCollections)(exports.db);
    }
    catch (error) {
        throw error;
    }
};
connectToDb().then(async () => {
    console.log('Connected to DB');
    //launching the app
    app.listen(8000, () => {
        console.log('express app is running on 8000');
    });
    // const user1 = {
    //     email: 'user1@gmail.com',
    //     password: '12345678',
    //     firstName: 'First'
    // }
    // const result = await insertNewUser(user1)
    // console.log(result)
}).catch((error) => {
    console.log('Failed connecting to DB');
    throw error;
});
