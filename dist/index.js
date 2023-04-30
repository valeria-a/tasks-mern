"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const taskRouter_1 = require("./routers/taskRouter");
const connection_1 = require("./DAL/connection");
// initiate the express app
const app = (0, express_1.default)();
//use the middleware
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, compression_1.default)());
app.use(express_1.default.json());
app.use('/tasks', taskRouter_1.taskRouter);
let db;
const connectToDb = async () => {
    try {
        db = await (0, connection_1.establishDBConnection)();
    }
    catch (error) {
        throw error;
    }
};
connectToDb().then(async () => {
    console.log('Connected to DB');
    //launching the app
    app.listen(3000, () => {
        console.log('express app is running on 3000');
    });
}).catch((error) => {
    console.log('Failed connecting to DB');
    throw error;
});
