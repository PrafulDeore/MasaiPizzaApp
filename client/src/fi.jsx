import React from "react";
import axios from "axios";
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
function Product() {

  const [data, setData]=useState([])
  const [filtering,setFiltering]=useState([])
  const getData=()=>{
      axios.get('http://localhost:3004/mobiles').then((res)=>{
          setData(res.data)
          setFiltering(res.data)
      })
  }
  useEffect(()=>{
      getData();
  },[])

  const carditem=(item)=>{
    return(
      <div className="card my-5 py-4" key={item.id} style={{width:" 18rem"}}>
  <img src={item.img} className="card-img-top" alt={item.title}/>
  <div className="card-body text-center">
    <h5 className="card-title">{item.title}</h5>
    <p className="lead">Rs.{item.price}</p>
    <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
  </div>
</div>
    )
  }
   
//    function handlesort(e){
//      let x;
//      if(e.target.value === "asc"){
//       x = data.sort((a,b) => (+a.price.split(",").join(""))-(+b.price.split(",").join("")) )
//      }
//      else if(e.target.value === "desc"){
//       x = data.sort((a,b) => (+b.price.split(",").join(""))-(+a.price.split(",").join("")) )
//      }
//      setData([...x]);
//    }
   
    function handleFilter(e){
      let x;
      if(e.target.value === "all"){
        x = filtering;
      }
      else{
        x = filtering.filter((el) => {
          return el.title === e.target.value;
        })
      }
      setData(x);
    }
    return (
      <>
      
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Product</h1>
              <hr />
               <div className="sortbtn">
                 <select name="" id="" onChange={handlesort}>
                    <option value="">Sort by price</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                 </select>


                 
                    <select onChange={handleFilter}>
            <option value="">Filter by title</option>
            <option value="all">All</option>
            <option value="iphone 11">Iphone 11</option>
            <option value="iphone 13">Iphone 13</option>
            <option value="iphone 13 pro max">Iphone 13 Pro Max</option>
          </select>
        {/* <button className="btn btn-outline-primary" onClick={()=>handlesort()}>sort</button> */}
       {/* <button className="btn btn-outline-primary">filter</button> */}
               </div>
            </div>
          </div>
        </div>
        <div className="container">
            <div className="row justify-content-around">
                {data.map(carditem)}
            </div>
          </div>
      </>
    );
  }
  
  export default Product;