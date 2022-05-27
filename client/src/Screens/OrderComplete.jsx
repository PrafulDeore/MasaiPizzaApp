import Button from '@mui/material/Button';
import Navbar from '../Components/Navbar';
import '../style/./orderComplete.css';
import { useNavigate } from "react-router-dom";

export const OrderComplete=()=>{
  const navigate=useNavigate()

const handleNavigate=()=>{
  navigate("/home")
}
const orderDetail=JSON.parse(localStorage.getItem("personalDetails")) 
const totalAmout=JSON.parse(localStorage.getItem("SubTotal"))
console.log("totalAmout",totalAmout)

    return(
      <>
      <Navbar/>
        <div className="orderComplteMainDiv" >
        <div className="flexImage"><img style={{width:"100%",height:"250px",marginTop:"100px"}}
        src="https://images.ctfassets.net/wtodlh47qxpt/bwwtSv4zmZZm42c5wSg8Z/bd28ca73bbefa15b45f14c994e72ed03/Matchday_Banner_1440x396px.jpg?w=1366&fit=fill&fm=webp" alt="" /></div>

        <div style={{}}></div>
          <h1 style={{color:"green"}}>Congratulations Order is Successfull!!!</h1>


          <div className="orderInnerDiv">


          <div className="leftDiv">
            <h2>Youre Details</h2>
            <hr />
            <div className="innerContainer">
            <div className="id">
            <h6><span> Name:</span> {orderDetail.card.name}</h6>
            </div>
            
            <div className="id">
            <h6><span> Order Id:</span> {orderDetail.id}</h6>
            </div>

            <div className="id">
            <h6><span> Payment Methode:</span> Online(Debit Card)</h6>
            </div>


            <div className="id">
            <h6><span> Youre Email:</span> {orderDetail.email}</h6>
            </div>


            </div>
          </div>
          <div className="rightDiv">
          <h2>Order Details</h2>
          <hr />
          <div className="id">
          <h6><span> Address:</span> {orderDetail.card.address_line1},{orderDetail.card.address_city},{orderDetail.card.address_country}</h6>
          </div>
          <div className="id">
          <h6><span> Total Amount:</span> ₹{totalAmout}</h6>
          </div>
          
          </div>
        </div>
        </div>
        <Button
        variant="outlined"
        onClick={handleNavigate}
        >
        Buy More Pizzas
      
        </Button>
        </>
    )
    
}


 
