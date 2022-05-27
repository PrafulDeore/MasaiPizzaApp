// Action Type=======>
export const SIGNUP_LOADING="SIGNUP_LOADING";
export const SIGNUP_SUCCESS="SIGNUP_SUCCESS";
export const SIGNUP_FAILURE="SIGNUP_FAILURE";


//Action Creators======>

export const signUp_loading=()=>({
    type:SIGNUP_LOADING
})

export const signUp_success=(user)=>({
    type:SIGNUP_SUCCESS,
    user
    
})

export const signUp_failure=()=>({
    type:SIGNUP_FAILURE
})