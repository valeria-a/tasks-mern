import express, {Express, NextFunction, Request, Response} from "express";
import cors from 'cors';
import helmet from 'helmet'
import compression from 'compression'
import {Db} from "mongodb";
import {createCollections, establishDBConnection} from "./DAL/connection";

import {taskRouter} from "./routers/taskRouter";
import {userRouter} from "./routers/userRouter";
import {requestMiddleware} from "./middlewares/general";


// initiate the express app
const app:Express = express();


//use the middleware
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(express.json())

//our custom middleware
app.use(requestMiddleware)
// app.use(((req:Request, res:Response, next:NextFunction) => {
//     console.log(`url: ${req.url} | body: ${JSON.stringify(req.body)} | query_parms: ${JSON.stringify(req.params)}`)
//     next()
// }))

app.use('/api/tasks', taskRouter);
app.use('/api/users', userRouter);

export let db: Db;

const connectToDb = async () => {
    try {
        db = await establishDBConnection()
        await createCollections(db);
    } catch (error: any) {
        throw error
    }
}

connectToDb().then(async () => {

    console.log('Connected to DB')

    //launching the app
    app.listen(8000, () => {
        console.log('express app is running on 8000')
    })
}).catch((error: any) => {
    console.log('Failed connecting to DB', error)
    throw error;
})
