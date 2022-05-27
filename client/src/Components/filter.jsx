import React, { useEffect, useState } from 'react'
import { filterSuccess } from '../Redux/Actions/filterAction';
import { hadleFilter } from '../Redux/Actions/pizzaAction';

export const FilterButton=()=> {

    // const [data, setData]=useState([])
    // const [filtering,setFiltering]=useState([])

    // const getAllfilter=(payload)=>(dispatch)=>{
    //     dispatch(filterLoading())
    //     axios.get('http://localhost:3225/pizzaS', 
    //     {
    //       ...payload,
         
    //     })
    //     .then(function (res) {
    //         setData(res.data)
    //         setFiltering(res.data)
    //         // console.log()
    //     })
    //     .catch(function (error) {
    //         dispatch(filterFailed(error))
    //       console.log(error);
    //     });
    // }
    // useEffect(()=>{
    //     getAllfilter();
    //     console.log(data)
    // },[])
    

  return (
    <div>
    <div style={{}}>

    <select style={{border:"1px solid red" }} onClick={hadleFilter} className="form-control w-100 m-1"  >
    <option value="" >Categories</option>
      <option value="all">All</option> 
        <option value="veg" >Veg</option>
        <option value="nonveg">NonVeg</option>
    </select>
   </div>
   
   </div>
  )
}
