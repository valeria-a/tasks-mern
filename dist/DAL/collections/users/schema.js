"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsersCollection = exports.USERS_COLLECTION_NAME = void 0;
const connection_1 = require("../../connection");
exports.USERS_COLLECTION_NAME = 'users';
const DROP_COLLECTION = false;
const createUsersCollection = async (db) => {
    try {
        const isCollectionExist = await (0, connection_1.checkIfCollectionExist)(db, exports.USERS_COLLECTION_NAME);
        if (isCollectionExist && DROP_COLLECTION) {
            await db.dropCollection(exports.USERS_COLLECTION_NAME);
        }
        else if (isCollectionExist) {
            return;
        }
        const usersCollection = await db.createCollection(exports.USERS_COLLECTION_NAME, {
            validator: {
                $jsonSchema: {
                    bsonType: 'object',
                    required: [
                        'email',
                        'password',
                        'firstName',
                    ],
                    properties: {
                        email: {
                            bsonType: 'string',
                            description: 'must be a string and is required',
                            pattern: '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$',
                        },
                        password: {
                            bsonType: 'string',
                            description: 'must be a string and is required',
                        },
                        firstName: {
                            bsonType: 'string',
                            description: 'must be a string and is required',
                            pattern: '^[a-zA-Z\\s]{1,}$', // TODO: think it through
                        },
                    },
                },
            },
            validationAction: 'error',
            validationLevel: 'strict',
        });
        if (usersCollection) {
            // index the email field
            await usersCollection.createIndex({ email: 1 }, { unique: true });
        }
    }
    catch (error) {
        console.error(`Error creating users collection: ${error.stack}`);
        throw error;
    }
};
exports.createUsersCollection = createUsersCollection;
