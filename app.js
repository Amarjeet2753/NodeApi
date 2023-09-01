
import  express  from "express";

import userRouter from './routes/userRoutes.js'
export const app = express();

import {config} from "dotenv"

config({
    path : "./data/config.env",
});

// middleware use============================>
app.use(express.json())
app.use("/users",userRouter)


app.get("/",(req,res)=>{
    res.send("home")
})

