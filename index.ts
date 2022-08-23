import express from 'express';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import {routes} from "./src/route/route";

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/employee_management1').then(()=>{
    console.log('connect success')
}).catch(err => {
    console.log(err);
})
app.use(cors());
app.use('',routes)
app.listen(PORT,() => {
    console.log(`server running at http://localhost:${PORT}`);
});