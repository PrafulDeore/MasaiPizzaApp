// !Reducer Defines How ToDO-------------
import { GET_PIZZA_FAILED, GET_PIZZA_REQUEST, GET_PIZZA_SUCCESS, SORT } from "../Actions/pizzaAction";



const init={
    "loading":false,
     "error":false,
     "pizzaS":[]
}
// !Reducer always takes state/store and action =type & payload
export const getAllPizzasReducer =(store=init,{type,payload})=>{

    switch(type){

        case GET_PIZZA_REQUEST:
            return{
                ...store,
                "loading":true,
                "error":false
            };
            case SORT :
                return{
                    ...store,
                    pizzaS:[...store.pizzaS].sort((a,b)=>
                    a[payload]>b[payload] ? 1 :a[payload]<b[payload] ? -1:0
                )}

            case GET_PIZZA_SUCCESS:
                return{
                    ...store,
                   pizzaS: (payload.data),
                    "loading":false,
                    "error":false,
                }
            case GET_PIZZA_FAILED :
                return{
                    ...store,
                    "error":true,
    
                }  
                    default:
                        return store 
                
    }


}