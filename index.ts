import express, {Express} from "express";
import cors from 'cors';
import helmet from 'helmet'
import compression from 'compression'
import {taskRouter} from "./routers/taskRouter";
import {Db} from "mongodb";
import {establishDBConnection} from "./DAL/connection";

// initiate the express app
const app:Express = express();


//use the middleware
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(express.json())

app.use('/tasks', taskRouter);

let db: Db;

const connectToDb = async () => {
    try {
        db = await establishDBConnection()
    } catch (error: any) {
        throw error
    }
}

connectToDb().then(async () => {

    console.log('Connected to DB')

    //launching the app
    app.listen(3000, () => {
        console.log('express app is running on 3000')
    })
}).catch((error: any) => {
    console.log('Failed connecting to DB')
    throw error;
})

