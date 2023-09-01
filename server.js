
import { app } from "./app.js";
import { connectDb } from "./data/connectDb.js";

connectDb();


app.listen(process.env.PORT,()=>{
    console.log("server is running")
})