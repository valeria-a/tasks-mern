import express, {Express} from "express";
import cors from 'cors';
import helmet from 'helmet'
import compression from 'compression'
import {taskRouter} from "./routers/taskRouter";

// initiate the express app
const app:Express = express();


//use the middleware
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(express.json())

app.use('/tasks', taskRouter);


app.listen(3000, () => {
    console.log('express app is running on 3000')
})