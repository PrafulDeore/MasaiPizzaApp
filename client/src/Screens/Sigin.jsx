import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "../style/signup.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { singIn_Loading,signIn_Success,signIn_Fail} from "../Redux/Actions/signInAction"
import Navbar2 from '../Components/Navbar2';
import Button from '@mui/material/Button';



export const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("")
  const navgate = useNavigate()
  const dispatch=useDispatch()



  const handleSubmit = () => {
    const user = {
      email,
      password
    }

    dispatch(singIn_Loading())
    fetch(`https://masaipizzzza.herokuapp.com/login`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",

      }
    })
      .then((res) => res.json())
      .then((res) => {
        const token = res.token
        console.log(token)
        dispatch(signIn_Success(token)) //*if login will success 
        if (token) {
          alert("Login Successfull")
          navgate("/home")
        }
        else{
          alert("Invalid Login Credentionals")
        }
      })
      .catch((err) => {
       
        dispatch(signIn_Fail(err))
        
        console.log("No", err)})      //*if login is Failed
  }






  return (

    <>
    <Navbar2/>
    <div classemail="signupDiv">
      <div style={{ height: "200px" }}></div>
      <div classemail="signupForm"  className="inputBox" style={{border:"0px solid red" ,width:"25%",margin:"auto"}}>
        <h1>SignIn</h1>
        <TextField
        className='TextField'
          classemail='email'
          required
          id="outlined-required"
          label="Email"
          defaultValue="@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}

        />
        <br />
        <TextField
        type="password"
        className='TextField'
          classemail='password'
          required
          id="outlined-required"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

        />
        <br />
        <Button
        variant="contained"
          onClick={handleSubmit}
        >SignIn</Button>
      </div>




    </div>
    </>
  )
}