import "../style/pizza.css"
import { useState } from "react"
import { Modal } from "react-bootstrap"
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../Redux/Actions/cartAction";
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';





export const Pizza = ({ pizza }) => {


    const [quantity, setQuantity] = useState(1);
    const [variant, setVariant] = useState("small")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
     const dispatch=useDispatch()
   function handleAddToVCart(){
       dispatch(addToCart(pizza,quantity,variant,pizza.id))   //*calling a function from cartAction 
    // console.log(pizza)                                     //*Dispatch takes action and updates the store
   }
    
    return (
        <>
        <div >
           

            <Card className="Card" sx={{ display: 'flex'  }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent  onClick={handleShow} sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          <h5>{pizza.id}</h5>
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <h4>{pizza.name}</h4>
          </Typography>
        </CardContent>

        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <div className="felx-container">
        <div className="w-100 m-1"  >
            <p>Varientss</p>
            <select className="form-control"
                onChange={(e) => { setVariant(e.target.value) }}
                value={variant} >
                {pizza.varients.map(varient => {
                    return <option value={varient}>  {varient} </option>
                })}
            </select>
   
        </div>
   
        <div className="w-100 m-1" >
            <p>Quantity</p>
            <select className="form-control"
                onChange={(e) => { setQuantity(e.target.value) }}
                value={quantity} >
                {[...Array(10).keys()].map((x, i) => {
                    return <option value={i + 1}>{i + 1}</option>  /* for  quantity selction*/
                })}
            </select>
        </div>
    </div>
        </Box>

        <Box> <p>Category: {pizza.category}</p></Box>


        <Box className="payment" sx={{ display: 'flex'}}>
        
        <div >
         <h1 style={{fontSize:"25px"}} className="m-2 ">Price :{pizza.prices[0][variant] * quantity}</h1>
     </div>
     <div >
         <button className="btn" onClick={handleAddToVCart}>Add To Cart</button>
     </div>
        </Box>



      </Box>
      <CardMedia   onClick={handleShow}     
        sx={{ width: 220 }}
      > <img src={pizza.image} className="img-fluid" /></CardMedia>
    </Card>



 


            




            <Modal show={show} style={{height:"1000px"}}>
                <Modal.Header >
                    <Modal.Title>{pizza.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.image} className="img-fluid" styel={{height:"400px"}}/>
                    <p>{pizza.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>Close</button>

                </Modal.Footer>
            </Modal>
        </div>
        </>
    )



}