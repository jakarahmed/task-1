
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Update = () => {
const {id}=useParams();

const [values,setValues]=useState({
    id:id,
    title:'',
    description:'',

})

useEffect(()=>{
    axios.get(`http://localhost:3000/user/${id}`)
.then(res=>{
    setValues({...values,title:res.data.title,description:res.data.description})
})
.catch(error=>console.log(error))
},[])



const navigate=useNavigate();

const handsubmit=(e)=>{
    e.preventDefault();

    axios.put(`http://localhost:3000/user/${id}`,values)
.then(res=>{navigate('/')})
.catch(error=>console.log(error))
}
 return (
        <div>
            Update.jsx
         


            <form onSubmit={handsubmit}>
     <input
          type="text"
          name="title"
       
          className="input input-bordered w-full max-w-xs border-b-4 border-indigo-600 p-5"
value={values.title}
onChange={e=>setValues({...values,title:e.target.value})}
          placeholder="Title"
        /><br></br>
     <input
          type="text"
          name="details"
     value={values.description}
     onChange={e=>setValues({...values,description:e.target.value})}
        className="input input-bordered w-full max-w-xs border-b-4 border-indigo-600 p-5"

          placeholder="Detail"
        /><br></br>
    
          <input  className="border-4 px-5 py-2" type="submit" value="submit" /><br></br>
     </form>
     <NavLink to={"/"}>go back</NavLink>

        </div>
    );
};

export default Update;