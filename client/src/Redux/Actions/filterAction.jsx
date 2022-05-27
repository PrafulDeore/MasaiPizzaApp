

//! type
export const FILTER_LOADING="FILTER_LOADING";
export const FILTER_SUCCESS="FILTER_SUCCESS"
export const FILTER_FAILED="FILTER_FAILED"

//!Action Creators

export const filterLoading=()=>({
    type:FILTER_LOADING
})
export const filterSuccess=(payload)=>({
    type:FILTER_SUCCESS,
    payload
})
export const filterFailed=()=>({
    type:FILTER_FAILED
})