import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type:"String",
        required:true
    },
    email:{
        type:"String",
        required:true, 
        unique:true
    },
    password:{
        type:"String",
        required:true
    },
    cartData:{
        type:Object,
        default:{},
    }
},{minimize:false})
                        //cartData entry will not be created because we have not added anything in the cart i.e. in the cartData object.

const userModel = mongoose.models.user || mongoose.model("user", userSchema)
export default userModel;