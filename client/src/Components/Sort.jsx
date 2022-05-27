import { useDispatch } from "react-redux";
import { sort } from "../Redux/Actions/pizzaAction";

export const Sort=()=>{
const dispatch=useDispatch()

    return(

        <div style={{marginTop:"200px"}}>
        <select style={{border:"1px solid red" }} className="form-control w-100 m-1" onChange={(e) => {
          dispatch(sort(e.target.value));
        }}>
        <option value=""  >Sort</option>
          <option value="id">Sort by id</option>
          <option value="name">Sort by name</option>
          <option value="category">Sort by category</option>
        </select>
        
        </div>

    )
}


