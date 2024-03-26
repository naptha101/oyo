"use client"
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const login = () => {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,SetPassword]=useState("");
const router=useRouter();
  const Submit=async ()=>{
try{
   if(name==""){
    await axios.post("/api/user/login",{email:email,password:password},{withCredentials:true}).then((res)=>{
      console.log(res);
     Cookies.set("token",res.data.token);
    router.push('/')
        })
   }else{
    await axios.post('/api/user/register',{email,password,name},{withCredentials:true}).then((res)=>{
      console.log(res);
      Cookies.set("token",res.data.token)
      router.push('/')
    })
   }

}
catch(err){
  console.log(err);
}
  }


  return (
    <div className=' w-full h-screen flex flex-row justify-center items-center'>
    <div className='flex  p-4 item-center justify-center gap-8'>

     <div className=''>
      <p className='text-4xl font-bold'>
     The smarter way to OYO around
      </p>
      <p className='text-xl font-bold'>
     Sign up with your email and use our software to get yourself 
     your oyo
      </p>
     </div>
   <div className='flex flex-col gap-3 border-2 border-orange-400 border'>
    <p className='p-3 bg-gradient-to-r from-red-300 to-red-500'>Sign up and get 500 discount</p>
    <div className='p-5'>
    <p className='text-4xl'>
    Login/SignUp
    </p>
    <p>
        Please enter Your Email
    </p>
    <div className='flex flex-col p-3 gap-4 '>
    <input
    className='py-2 px-1 rounded-lg text-black'
     type="text"
     placeholder='username'
     onChange={(e)=>setName(e.target.value)}
    >
    </input> 
    <input
    className='py-2 px-1 rounded-lg text-black'
     type="email"
     onChange={(e)=>setEmail(e.target.value)}
     placeholder='Enter Mail'
    >
    </input> 
    <input
    className='py-2 px-1 rounded-lg text-black'
     type="password"
     onChange={(e)=>SetPassword(e.target.value)}
     placeholder='password'
    >
    </input> 
    </div>  
    <button  className='px-5 py-2 ms-3 rounded-lg bg-orange-600 ' onClick={()=>Submit()}>
        Register
    </button>
    <h1 className='m-4'>If already have a account <span className='text-orange-600 hover:underline hover:cursor-pointer m-1' onClick={()=>Submit()}>Login</span></h1>
    </div>
   </div>

    </div>
    </div>
  )
}

export default login