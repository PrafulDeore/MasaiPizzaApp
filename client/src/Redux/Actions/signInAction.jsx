//!Action Types=====>
export const SIGNIN_LOADIN="SIGNIN_LOADIN";
export const SIGNIN_SUCCESS="SIGNIN_SUCCESS";
export const SIGNIN_FAIL="SIGNIN_FAIL";



//!Action Creators=====>
export const singIn_Loading=()=>({
 type:SIGNIN_FAIL
})


export const signIn_Success=(user)=>({
 type:SIGNIN_SUCCESS,
 user
    
})

export const signIn_Fail=()=>({
    type:SIGNIN_FAIL
})