import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { DenseTable } from "./Table";

export const Home=()=>{
  const navigate=useNavigate()
  const handleNextPage=()=>{
    navigate("/listing/create")
  }

  return(
        <>
          <DenseTable/>
          <Button variant="contained" onClick={handleNextPage} >Add More Pet-Hostels </Button>
        </>
  )
}