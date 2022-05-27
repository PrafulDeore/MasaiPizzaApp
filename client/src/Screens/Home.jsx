import { Pizza } from '../Components/Pizza'
// import { pizzaS } from '../db'
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect, useState } from 'react'
import { getAllPizzas } from '../Redux/Actions/pizzaAction'
import Loading from '../Components/ELS/Loading'
import Error from '../Components/ELS/Error'
import { FilterButton } from '../Components/filter'
import { Sort } from '../Components/Sort'
import Navbar from '../Components/Navbar'



export default function Home() {
 

  const [] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPizzas())
  }, [])

  const pizzasState = useSelector(state => state.getAllPizzasReducer)

  const { loading, error, pizzaS } = pizzasState
  console.log("pizzaS",pizzaS)



  return (
    <>
    <Navbar/>
    <div className="flexImage"><img style={{width:"100%",height:"250px",marginTop:"100px"}} src="https://images.ctfassets.net/wtodlh47qxpt/bwwtSv4zmZZm42c5wSg8Z/bd28ca73bbefa15b45f14c994e72ed03/Matchday_Banner_1440x396px.jpg?w=1366&fit=fill&fm=webp" alt="" /></div>

      <div className="fliterSort" style={{display:"flex" ,justifyContent:"space-around"}}>
       <Sort/>
      </div>
      <div className='row'>
        {loading ? (<Loading />) : error ? (<Error error="Somthing Went Wrong" />) : (

          pizzaS.map((pizza) => {
            return (
              <div className='col-md-4 p-8' key={pizza.id} >
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            )

          })
        )}

      </div>
    </>
  )
}



