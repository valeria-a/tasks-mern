"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertNewUser = void 0;
const schema_1 = require("./schema");
const index_1 = require("../../../index");
const bcrypt = __importStar(require("bcrypt"));
const insertNewUser = async (user) => {
    const usersCollection = index_1.db.collection(schema_1.USERS_COLLECTION_NAME);
    try {
        user.password = await bcrypt.hash(user.password, 10);
        console.log('inserting user', user);
        const result = await usersCollection.insertOne(user);
        return { success: true, ...result };
    }
    catch (error) {
        console.error(`Error Message: ${error.message}`, {
            functionName: exports.insertNewUser.name,
        });
        return { success: false, error: error.message };
    }
};
exports.insertNewUser = insertNewUser;
