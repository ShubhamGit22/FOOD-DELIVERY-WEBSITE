// "type": "module" - in order to use es6 features.

import express from "express";
import cors from "cors"
import "./config/db.js"
import "dotenv/config"

import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";

import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express()
const port = process.env.PORT || 4000 

// middleware
app.use(express.json())
app.use(cors())                         //to give access to frontend of backend



//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))                               
                                                                                //to check uploaded file to db; http://localhost:4000/images/1721103583982DSC_0189.JPG
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)






app.get("/",(req, res) => {
    res.send("API working")
})

app.listen(port, ()=>{
    console.log(`Server started on http://localhost:${port}`);
})





