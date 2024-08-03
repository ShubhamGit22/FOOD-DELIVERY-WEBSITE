import foodModel from "../models/foodModel.js"
import fs from "fs"                                     //file system is in-built in node.js


//add food item
const addFood = async (req, res) => {

    let image_filename =  `${req.file.filename}`                                      //name of the uploaded image is stored in image_filename.

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true, message:"Food added"})
    } catch (error) {
        console.log(error);
        res.json({succcess:false, message:"error"})
    }
}

// all food list
const  listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true, data:foods})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
        
}

//remove food item
const removeFood = async(req, res) => {
    try {
        const food = await foodModel.findById(req.body.id)                                          //needs to give an id in body
        fs.unlink(`uploads/${food.image}`, () => {})                                        //for image deletion.
        await foodModel.findByIdAndDelete(req.body.id)                                      //for data deletion

        res.json({success:true, message:"Food removed"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
        
    }
}
                        //fs.unlink() is the method to delete a file.- uploads/${food.image} is the path to the file to be deleted.
                        //  uploads/ is the directory where the file is located. ${food.image} is the name of the file, which is stored in the food object's image property. The second argument () => {} is a callback function that will be executed when the file is deleted.
                        // fs.unlink() is an asynchronous method, meaning it doesn't block the code execution while deleting the file.






export {addFood, listFood, removeFood};