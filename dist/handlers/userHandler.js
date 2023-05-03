"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupHandler = void 0;
const queries_1 = require("../DAL/collections/users/queries");
const signupHandler = async (user) => {
    const dbResult = await (0, queries_1.insertNewUser)(user);
    return dbResult;
};
exports.signupHandler = signupHandler;
