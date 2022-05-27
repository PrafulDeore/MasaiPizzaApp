import {GET_ORDER_SUCCESS} from "../Actions/checkOutAction"




export const getOrderReducer=(store={checkoutItems:[]},{type,payload})=>{


    switch(type){
        case GET_ORDER_SUCCESS :
            return{
                ...store,
                checkoutItems:[...store.checkoutItems, payload],
            }
            default: return{
                store
            }
    }
}