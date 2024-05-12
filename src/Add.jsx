import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Add = () => {

const [name,setTitle]=useState([]);
const [details,setdata]=useState([]);



const hand=(event)=>{
    event.preventDefault();
  
    axios.post("http://localhost:3000/user",{title:name,description:details})
    .then(res=>{location.reload(res)})

.catch(error=>console.log(error));
}


    return (
        <div className=" flex-col">
     <form onSubmit={hand}>
     <input
          type="text"
          name="title"
        onChange={e=>setTitle(e.target.value)}
          className="input input-bordered w-full max-w-xs border-b-4 border-indigo-600 p-5"

          placeholder="Title"
        /><br></br>
     <input
          type="text"
          name="details"
          onChange={e=>setdata(e.target.value)}
        className="input input-bordered w-full max-w-xs border-b-4 border-indigo-600 p-5"

          placeholder="Detail"
        /><br></br>
    
          <input  className="border-4 px-5 py-2" type="submit" value="submit" /><br></br>
     </form>

     

<NavLink to={"/"}>Go back</NavLink>

        </div>
    );
};

export default Add;