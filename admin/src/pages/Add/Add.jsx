import React, { useState } from 'react';
import "./Add.css"
import { contentFiles } from '../../contentFiles/contentFiles';
import axios from "axios"
import { toast } from 'react-toastify';

const Add = ({url}) => {


    const [image, setImage] = useState(false)
    const [data, setdata] = useState({
        name:"",
        description:"",
        price:"",
        category:"Salad"
    })
    
    const onChangeHandler = ( event) => {
            const name = event.target.name
            const value = event.target.value
            setdata(data=>({...data, [name]:value}))
    }

    // useEffect(()=>{
    //    console.log(data);                                            //just to check the updation.
    // }, [data])

    const onSubmitHandler = async (event) => {
            event.preventDefault();

            const formData = new FormData()                                                     //new FormData() creates a new instance of the FormData object, which is used to store and submit form data.
            formData.append("name", data.name)
            formData.append("description", data.description)
            formData.append("price", Number(data.price))
            formData.append("category", data.category)
            formData.append("image", image)

            const response = await axios.post(`${url}/api/food/add`, formData)
        // const response = await axios.post(`${url}/api/food/add`, formData)

            if (response.data.success) {
                console.log(response)
                setdata({
                    name:"",
                    description:"",
                    price:"",
                    category:"Salad"
                })
                setImage(false)
                // toast.success("Food Added just")
                toast.success(response.data.message)

            }
            else{
                    toast.error("Error Ocurred")
            }
                                                                        //- axios.post(): This is a method from the Axios library that sends a POST request to the server.
                                                                        //- formData: This is the data being sent in the request body. It's the FormData object created earlier, which contains the form data, including any files.
                                                                        // When this code is executed, Axios sends a POST request to the server with the form data in the request body. The server then processes the request and adds the new food item.

    }
    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
              <div className='add-img-upload flex-col'>
                <p> Upload Image </p>
                <label htmlFor="image">
                    <img src={image ? URL.createObjectURL(image) : contentFiles.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden required />
                </div>
                <div className="add-product-name flex-col">
                    <p>Product Name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type Here' />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea onChange={onChangeHandler} value={data.description}  name="description" rows="6" placeholder='Write content here'></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product Category</p>
                        <select onChange={onChangeHandler} name="category" >
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Deserts">Deserts</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Cake">Cake</option>
                            <option value="Pure Veg">Pure Veg</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Noodles">Noodles</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                            <p>Product Price</p>
                            <input onChange={onChangeHandler} value={data.price}  type="Number" name='price' placeholder='$20'/>
                    </div>
                </div>
                <button type='submit' className='add-btn'> Add </button>
            </form>
        </div>
    );
}

export default Add;
