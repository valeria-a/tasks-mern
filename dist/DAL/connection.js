"use strict";
// export const checkIfCollectionExist = async (
//     db: Db,
//     collectionName: string
// ): Promise<boolean> => {
//     const collections = await db.collections();
//     return collections.some(
//         (collection) => collection.collectionName === collectionName
//     );
// };
//
// export const createCollections = async (db): Promise<boolean> => {
//     // await createUsersCollection(db);
//     return true;
// };
Object.defineProperty(exports, "__esModule", { value: true });
exports.establishDBConnection = void 0;
const mongodb_1 = require("mongodb");
const MONGO_URI = "mongodb+srv://valeria:VjXHSaNCGZXDVyIs@taskmanagermongocluster.uibbw3b.mongodb.net/?retryWrites=true&w=majority";
const DB_NAME = "taskManagerDB";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new mongodb_1.MongoClient(MONGO_URI, {
    serverApi: {
        version: mongodb_1.ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
const establishDBConnection = async () => {
    try {
        await client.connect();
        await client.db(DB_NAME).command({ ping: 1 });
        return client.db(DB_NAME);
    }
    catch (error) {
        console.error(`Error connecting to DB: ${error.stack}`);
        throw error;
    }
};
exports.establishDBConnection = establishDBConnection;
