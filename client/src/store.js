// !STORE Takes REDUCERS

import { getAllPizzasReducer } from "./Redux/Reducers/pizzaReducers";
import { cartReducer } from "./Redux/Reducers/cartReducer";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk"
import { getFilter } from "./Redux/Reducers/filterReducer";
import { getOrderReducer } from "./Redux/Reducers/checkOutReducer";
import {signUpReducer} from "./Redux/Reducers/signUpReducer";
import{sigIn_Reducer} from "./Redux/Reducers/signInReducer"

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


    const middleware=[thunk]        //! 1.added line 
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
 const rootReducer=combineReducers({   //! 2.added line 
    getAllPizzasReducer,
    cartReducer,
    getFilter,
    getOrderReducer,
    signUpReducer,
    sigIn_Reducer

 })
 //For set ORDER DETAILS IN LOCAL STORAGE----->


    // const checkout= localStorage.setItem("checkoutDetails",JSON.stringify(checkoutDetail ))
     //!Setting To the LOCAL STORAGE------------

//     function orderData(getState){
//       const setDetil=getState ().getOrderReducer.setDetils;
//       localStorage.setItem("setDetils",JSON.stringify(setDetil))
//  console.log("setDetil",setDetil)
//     }





//For Local Storage-----
 const cartItems=localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem("cartItems")) :[];
const initialState={
  cartReducer:{
    cartItems
  }
}




export const store = createStore(rootReducer,initialState,enhancer);   //!3.added export before const