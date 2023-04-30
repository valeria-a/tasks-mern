"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertNewUser = void 0;
const schema_1 = require("./schema");
const index_1 = require("../../../index");
const insertNewUser = async (user) => {
    const usersCollection = index_1.db.collection(schema_1.USERS_COLLECTION_NAME);
    try {
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
