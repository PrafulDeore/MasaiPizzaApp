import React from 'react'
import { useSelector } from 'react-redux'



export default function Navbar() {
  const cartSelector = useSelector(store => store.cartReducer)
 

  return (
    <div className='nav' style={{}}>

      <div style={{ display: "flex" }}>
        <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN8cxwk65-TwH9z6VLuEdT1cx9jJEUl8xZEFiUAaIuhIU5DtKMM_UMiFa51CB_aKE74b8&usqp=CAU" alt=""
         />
        <h1 className="masai_name">MASAI PIZZA</h1>
      </div>


      <div className='loginCart' style={{ display: "flex",width:"200px" }}>
        
        <a  href="/cart">Cart {cartSelector.cartItems.length}</a>
        <a  href="/">LogOut</a>

      </div>

    </div>
  )
}
