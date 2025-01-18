import mongoose from 'mongoose';
import connectDB from './db/index.js';
import dotenv from 'dotenv';


dotenv.config({
    path: "./env"
});
connectDB().then(
    ()=>{
        app.listen(process.env.PORT,()=>{
            console.log("Server listening on port " + process.env.PORT);
        })
    }
).catch((err)=>{
    console.log("MONGODB Connection Error: " + err)
})