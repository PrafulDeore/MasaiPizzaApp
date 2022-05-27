import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar'
import Home from './Screens/Home'
import{Routes,Route} from "react-router-dom"
import Cart from './Screens/Cart'
import MediaControlCard from './Screens/Cart'
import { Checkout } from './Screens/Cheackout'
import { OrderComplete } from './Screens/OrderComplete'
import { Signup } from './Screens/Signup'
import { SignIn } from './Screens/Sigin'

function App() {

  return (
    <div className="App">
      
     
      <Routes>
      <Route path='/' element={<Signup/>}></Route>
      <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/cart' element={<MediaControlCard/>}></Route>
        <Route path='/checkout' element={<Checkout/>}> </Route>
        <Route path='/complete' element={<OrderComplete/>}></Route>
      
      </Routes>
      
    </div>
  )
}

export default App
