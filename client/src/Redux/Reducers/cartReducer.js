// !Reducer Defines How ToDO-------------

// import { ADD_TO_CART} from "../Actions/cartAction"



export const cartReducer = (store = { cartItems: [] }, {type,payload}) => {
    switch (type) {

        case "ADD_TO_CART":


            const alreadyExist = store.cartItems.find(item => item.id === payload.id)

            if (alreadyExist) {
                return ({
                    ...store,
                    cartItems: store.cartItems.map(item => item.id === payload.id ? payload : item)
                })
            }
            else {
                return ({
                    ...store,
                    cartItems: [...store.cartItems, payload],

                })


            }

        case "DELETE_FROM_CART":
            return ({
                ...store,
                cartItems: store.cartItems.filter(item =>
                    item.id !== payload.id
                )
            })
        default: return (store)
    }

}

