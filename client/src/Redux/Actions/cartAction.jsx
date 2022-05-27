
// //!1. Action Type-------------------------
// export const ADD_TO_CART_LOADING="ADD_TO_CART_LOADING";
// export const ADD_TO_CART="ADD_TO_CART";
// export const ADD_TO_CART_FAILES="ADD_TO_CART_FAILES";


// //!1. Action Creators-------------------------
// export const addToCartLoading=()=>({
//    type:ADD_TO_CART_LOADING

// })



//  export const addToCartSuccess=(cartPayload)=>({
//      type:ADD_TO_CART_SUCCESS,
//      cartPayload
//  })





 export const addToCart=(pizza,quantity,variant)=>(dispatch,getState)=>{
    var cartItems={
        name:pizza.name,
        id:pizza.id,
        image:pizza.image,
        variant:variant,
        quantity:quantity,
        prices:pizza.prices,             //array of price
        price:pizza.prices[0][variant] *quantity
    }
    //!for increaments And Decrement button------>
    if(cartItems.quantity>10){
        alert("You cannot add more than 10 pizzas");
    }
    else{
        if(cartItems.quantity<1){
            dispatch({type:"DELETE_FROM_CART", payload:pizza})
        }
        else{
            dispatch({type:"ADD_TO_CART",payload:cartItems})
        }

    }



    //!Setting To the LOCAL STORAGE------------
    const cartItem=getState().cartReducer.cartItems;
    localStorage.setItem("cartItems",JSON.stringify(cartItem))
 }
 

 export const deleteFromCart=(pizza)=>(dispatch,getState)=>{


    dispatch({type:"DELETE_FROM_CART", payload:pizza})
    const cartItem=getState().cartReducer.cartItems;
    localStorage.setItem("cartItems",JSON.stringify(cartItem))
 }