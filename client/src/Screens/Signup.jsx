import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../style/signup.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp_failure, signUp_loading, signUp_success } from '../Redux/Actions/signUpAction';
import Navbar2 from '../Components/Navbar2';
import '../style/signup.css';



export const Signup=()=>{
  const [email,setEmail]=React.useState("");
  const [password,setPassword]=React.useState("")
 const [aginpass,setAginpass]=React.useState("")

const navigate=useNavigate()
const dispatch=useDispatch()


const handleSubmit=()=>{
  const user={
    email,
    password

  }
  console.log(user)
  if(password===aginpass){

  dispatch(signUp_loading())
  fetch(`https://masaipizzzza.herokuapp.com/register`,{
    method:"POST",
    body:JSON.stringify(user),
    headers:{
        "Content-Type":"application/json"
    }
})
.then((res)=>res.json())
.then((res)=>{
  dispatch(signUp_success(res.token))
      console.log(res.token) 
       //*if signup will success 
      alert("SignUp Successfull");
      navigate("/signin")
  
  }) 
  .catch((err)=>{
    dispatch(signUp_failure())
    alert("User is Already Register Please try with another email");
})      //*if signup is Failed


  }
  else {
    alert("Password Doesnot match");

  }
}

    return(
      <>
      <Navbar2/>


    <div classemail="signupDiv">
     <div style={{height:"200px"}}></div>
       <div classemail="signupForm" style={{border:"0px solid black"}}>
       <h1>SignUp</h1>
       <div className="inputBox" style={{border:"0px solid red" ,width:"25%",margin:"auto"}}>
       <TextField
       className='TextField'
       classemail='email'
       required
       id="outlined-required"
       label="Email"
       defaultValue="@gmail.com"
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
      
       
     />
     <br />
     <TextField
     className='TextField'
     classemail='password'
       required
       id="outlined-required"
       label="Password"
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
       type="password"
       
     />

     <br />
     <TextField
     className='TextField'
     classemail='password'
       required
       id="outlined-required"
       label="Re-Confirm Password"
       value={aginpass}
       onChange={(e)=>setAginpass(e.target.value)}
       
     />
     <br />
     <button
       onClick={handleSubmit}
     >Signup</button>
       </div>
       <br />
       <a href="signin"> <p>I have Already Account</p></a>

       </div>
   

       </div>
       </>
    )
}