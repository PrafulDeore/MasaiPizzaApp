//!Reducer Defines How Todo=======>

import { SIGNUP_FAILURE, SIGNUP_LOADING, SIGNUP_SUCCESS } from "../Actions/signUpAction"


const init = {
    "loading": false,
    "fail": false,
    "users":[]
}


export const signUpReducer = (store = init, { type, payload }) => {
    switch (type) {

        case SIGNUP_LOADING:
            return {

                "loading": true,
                "error": false,
                ...store
            };
        case SIGNUP_SUCCESS:
            return {
                "loading": false,
                "fail": false,
                payload
            };
        case SIGNUP_FAILURE:
            return {
                loading: false,
                fail: true
            }
        default: return {
            store
        }
    }
}