import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar';
import axios from 'axios';
import swal from 'sweetalert';


const Forgot = () => {
    const [email, setemail] = useState("")
    const handleReset=async()=>{
      const data=await  axios.post("http://localhost:8080/forgot-password",{email});
      console.log(data)
      if(data.data.status>=200 && data.data.status<=226){
        swal("code sent")
        prompt("enter code")
      }
    }
  return (
    <>
   <Navbar/>
 <div className="flex flex-col justify-center  mt-24">
  <div className="flex flex-col justify-center items-center">
    <input type="email" name="email" onChange={(e)=>setemail(e.target.email)} placeholder="Enter your Email id" className="px-4 rounded-lg shadow-sm" />
    <Link to="/forgot-password" className="mt-2 ">
      <button className="bg-blue-700 px-4 rounded-lg shadow-md text-white " onClick={handleReset}> Reset</button>
    </Link>
  </div>
</div>


    </>
  )
}

export default Forgot