import { createContext, useState, useEffect } from "react";
// import { food_list } from "../contentFiles/contentFiles";
import axios from "axios"

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  // const url = "http://localhost:4000"                                          
  const url = "https://backend-mern-food-delivery-website.onrender.com"                 
                                                                      //backend url after deploying it on render.
  
  const [token, setToken] = useState("")
  const [ food_list, setfoodList] = useState([])                    //to get the all the data from database

  const addToCart = async (itemId) => {
    // console.log([itemId]);
    if (!cartItems[itemId]) {                                         //cartItems[itemId]: This expression accesses the value associated with the itemId key within the cartItems object.
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    // if(token){
    //     await axios.post(url + "/api/cart/add", {itemId},{headers:{token}})                                                         //if we have token then we will update in cart as well.
    // }
    if(token){
      await axios.post(url +"/api/cart/add", {itemId}, {headers:{token}})
    }
  };
                                                            // itemId is used as varieble, because it is enclosed in []. here, itemId is key and next to ":" is value..
  const removeFromCart = async(itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if(token){
      await axios.post(url + "/api/cart/remove", {itemId}, {headers:{token}})
    }
  };

 
  // useEffect(()=>{
  //     console.log(cartItems);
  // }, [cartItems])

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        // console.log(itemInfo)
        // let price = itemInfo.price
        // console.log(price)
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async() => {
    const response = await axios.get(url + "/api/food/list");
    setfoodList(response.data.data)
  }

  const loadCartData = async(token) => {
    const response = await axios.post(url + "/api/cart/get", {}, {headers:{token}})
    setCartItems(response.data.cartData)                                  //when added 5 items and then refreshed the page, added products will not be gone.
  }
  useEffect(()=>{
    async function loadData(){
      await fetchFoodList();
      if(localStorage.getItem("token")){
      setToken(localStorage.getItem("token"))
      await loadCartData(localStorage.getItem("token"));
    }       
  }                                            //even if we refreshed the page, the page will be still logged in and won't log out.
    loadData();
  },[])
  
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

                            // StoreContextProvider is made parent of all components.


                            // const cartItems = {
                            //   'product1': 2,
                            //   'product2': 1
                            // };
                            // cartItems['product1'] would return the value 2, indicating that there are two items of 'product1' in the cart.

                            
