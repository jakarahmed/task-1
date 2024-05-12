import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import Header from "./Header";
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
    
       <div>
     
         <div className=" justify-center flex items-center h-[100vh] my-auto ">
             
             <form onSubmit={hand} className="bg-teal-100 p-10 rounded-lg space-y-5">
             <h1 className="text-[30px] font-bold">Add Card !</h1>
             <input
                  type="text"
                  name="title"
                onChange={e=>setTitle(e.target.value)}
                  className="input input-bordered rounded-lg  w-full max-w-xs border-b-4 border-indigo-600 p-5"
        
                  placeholder="Title"
                /><br></br>
             <input
                  type="text"
                  name="details"
                  onChange={e=>setdata(e.target.value)}
                className="input input-bordered w-full rounded-lg  max-w-xs border-b-4 border-indigo-600 p-5"
        
                  placeholder="Detail"
                /><br></br>
            
                  <input  className="border-4 px-5 py-3  rounded-lg hover:bg-sky-700 bg-sky-500 rounded-lg text-white " type="submit" value="Add" /><br></br>
                  <NavLink to={"/"} className="text-[20px] pt-5 "><FaBackward className="mt-5" /></NavLink>
             </form>
        
             
        
        
        
                </div>
       </div>
    );
};

export default Add;