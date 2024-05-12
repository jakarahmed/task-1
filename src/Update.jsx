
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


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
        <div className="justify-center flex items-center h-[100vh] my-auto ">
          
          
         


         
            <form onSubmit={handsubmit} className="bg-teal-100 p-10 rounded-lg space-y-5">
         
            <h1 className="text-[30px] font-bold">Update Now !</h1>
     <input
          type="text"
          name="title"
       
          className="input input-bordered rounded-lg w-full max-w-xs border-b-4 border-indigo-600 p-5"
value={values.title}
onChange={e=>setValues({...values,title:e.target.value})}
          placeholder="Title"
        /><br></br>
     <input
          type="text"
          name="details"
     value={values.description}
     onChange={e=>setValues({...values,description:e.target.value})}
        className="input input-bordered rounded-lg w-full max-w-xs border-b-4 border-indigo-600 p-5"

          placeholder="Detail"
        /><br></br>
    
          <input  className="border-4 px-5  font-bold py-2 text-center justify-center mx-auto hover:bg-sky-700 bg-sky-500 rounded-lg text-white" type="submit" value="Update" /><br></br>
         
     </form>
   

        </div>
    );
};

export default Update;