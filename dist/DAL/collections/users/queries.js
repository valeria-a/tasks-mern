"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneUser = exports.insertNewUser = void 0;
const schema_1 = require("./schema");
const index_1 = require("../../../index");
const insertNewUser = async (user) => {
    const usersCollection = index_1.db.collection(schema_1.USERS_COLLECTION_NAME);
    try {
        console.log('inserting user', user);
        const result = await usersCollection.insertOne(user);
        return { success: true, ...result };
    }
    catch (error) {
        console.error(`Error in ${exports.insertNewUser.name} Message: ${error.message}`, {
            functionName: exports.insertNewUser.name,
        });
        return { success: false, error: error.message };
    }
};
exports.insertNewUser = insertNewUser;
const findOneUser = async (email) => {
    try {
        const usersCollection = index_1.db.collection(schema_1.USERS_COLLECTION_NAME);
        return await usersCollection.findOne({ email });
    }
    catch (error) {
        console.error(`Error in ${exports.findOneUser.name} Message: ${error.message}`, {
            functionName: exports.findOneUser.name,
        });
        const errInfo = `error in ${exports.findOneUser.name}: ${error}`;
        throw Error(errInfo);
    }
};
exports.findOneUser = findOneUser;
