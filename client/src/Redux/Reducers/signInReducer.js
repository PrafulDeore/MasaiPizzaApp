import { SIGNIN_FAIL, SIGNIN_LOADIN, SIGNIN_SUCCESS } from "../Actions/signInAction"

const init = {
    loading: false,
    fail: false,
    user: []
}
export const sigIn_Reducer = (store = init, { type, user }) => {
    switch (type) {
        case SIGNIN_LOADIN:
            return {
                laoding: true,
                fail: false,
                ...store

            }

        case SIGNIN_SUCCESS:
            return {
                laoding: false,
                user:[store.token],
                fail: false


            }
        case SIGNIN_FAIL:
            return {
                laoding: false,
            
                fail: true
            }
            default:return{
                store
            }
    }

}