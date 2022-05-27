import { FILTER_FAILED, FILTER_LOADING, FILTER_SUCCESS } from "../Actions/filterAction"

const init={
    "loading":false,
     "error":false,
     "pizzaS":[]
}
export const getFilter=(store=init,{type,payload})=>{

    switch(type){


        case FILTER_LOADING:
            return{
                ...store,
                "loading":true,
                "error":false
            }
            case FILTER_SUCCESS:
                return{
                    ...store,
                   pizzaS: (payload.data),
                    "loading":false,
                    "error":false,
                }
                case FILTER_FAILED:
                    return{
                        ...store,
                        "error":true,
                    }
                    default:
                        return store;

    }




}