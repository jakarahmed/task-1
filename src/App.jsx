import { useState,useEffect } from "react";
import './App.css'
import axios from "axios";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { NavLink } from "react-router-dom";


function App() {
  const [data, setData] = useState([]);
  useEffect(() => {

axios.get('http://localhost:3000/user')
.then(res=>setData(res.data))
.catch(error=>console.log(error));

    
  
  }, []);


  const handleDelet=(id)=>{
    axios.delete(`http://localhost:3000/user/${id}`)
    .then(res=>{
        location.reload();
    })
    .catch(error=>console.log(error))
  }

  return (
    <>
  

      {data.map((photo) => (

      
<div key={photo.title}>





<div className="w-full h-auto py-5 px-5 bg-[#9395d3] 
mt-5 text-white rounded-lg flex  justify-between gap-5">
<div>
<h2 className="text-[25px]">{(photo).title}</h2>
<p>{photo.description.slice(0,10)}</p>
</div>
<div>
  <div className="flex text-[30px] gap-3 mt-5 item-center">

  <NavLink to={"/add"}>  <IoMdAddCircle /> </NavLink>
  <NavLink to={`/update/${photo.id}`}>  <CiEdit /> </NavLink>
<button onClick={()=>handleDelet(photo.id)}>  <MdDelete /></button>
  </div>
</div>

</div>


</div>
      ))}
    </>





  )
}

export default App
