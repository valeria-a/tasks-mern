import {USERS_COLLECTION_NAME} from "./schema";
import {Collection, InsertOneResult} from 'mongodb'
import {db} from "../../../index";

export const insertNewUser = async (user: any) => {
    const usersCollection: Collection = db.collection(USERS_COLLECTION_NAME);
    try {
        console.log('inserting user', user)
        const result: InsertOneResult = await usersCollection.insertOne(user);
        return { success: true, ...result };
    } catch (error: any) {
        console.error(`Error in ${insertNewUser.name} Message: ${error.message}`, {
            functionName: insertNewUser.name,
        });
        return { success: false, error: error.message };
    }
};

export const findOneUser = async(email: string) => {
    try {
        const usersCollection: Collection = db.collection(USERS_COLLECTION_NAME);
        return await usersCollection.findOne({email})
    } catch (error: any) {
        console.error(`Error in ${findOneUser.name} Message: ${error.message}`, {
            functionName: findOneUser.name,
        });
        const errInfo: string = `error in ${findOneUser.name}: ${error}`
        throw Error(errInfo)
    }

}