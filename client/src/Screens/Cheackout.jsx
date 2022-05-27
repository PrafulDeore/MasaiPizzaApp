import StripeCheckout from "react-stripe-checkout"
import PaymentsIcon from '@mui/icons-material/Payment';
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
export const Checkout=(subTotal)=>{

   const navigate=useNavigate()
  const dispatch=useDispatch()

const tokenHandler=(token)=>{
    let checkoutDetail=token;

 localStorage.setItem("personalDetails",JSON.stringify(checkoutDetail))
 if(checkoutDetail){
   setTimeout(handleClick(),2000)
 }
    // console.log(token)
   
    // checkoutDetail=token;
}
 function handleClick(){

     navigate("/complete")
}



    return(
        <div className="mainCheackout" >
        
        <StripeCheckout 
         amount={subTotal*100}
         shippingAddress
         token={tokenHandler}
         stripeKey="pk_test_51Kyt2TSGFOs7wx3CTVB1Zc0srTHqpzFbhIKDuw3YFD1iBZVkficYPaqF0EJcPelRl93k9u7o44EQv9rQ1mGJz49J00rvAFAgpI"
         currency="INR"
         
        >
        <Button
        variant="outlined"
        startIcon={<PaymentsIcon/>}
       
        >

        CHEACK OUT
        </Button>
        
        </StripeCheckout>


        </div>
    )
}