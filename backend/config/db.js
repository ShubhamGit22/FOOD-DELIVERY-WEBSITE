import mongoose from "mongoose"

mongoose.connect("mongodb+srv://shubhamac7308:rLzcJiHHPr6s8Op4@cluster0.9yvlzop.mongodb.net/")
.then(()=> console.log("MongoDB connected"))
.catch((err)=> console.log("Connection Error"))



