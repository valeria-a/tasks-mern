import {USERS_COLLECTION_NAME} from "./schema";
import {Collection, InsertOneResult} from 'mongodb'
import {db} from "../../../index";
import * as bcrypt from "bcrypt";

export const insertNewUser = async (user: any) => {
    const usersCollection: Collection = db.collection(USERS_COLLECTION_NAME);
    try {
        user.password = await bcrypt.hash(user.password, 10)
        console.log('inserting user', user)
        const result: InsertOneResult = await usersCollection.insertOne(user);
        return { success: true, ...result };
    } catch (error: any) {
        console.error(`Error Message: ${error.message}`, {
            functionName: insertNewUser.name,
        });
        return { success: false, error: error.message };
    }
};