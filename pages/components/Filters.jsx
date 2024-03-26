"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Filters = (props) => {
const [Facilities,setFacilities]=useState([]);
useEffect(()=>{
 fetchh();
 

},[])
 const [key,SetKey]=useState("");
const HandleCheck=async ()=>{
const res=await axios.get("http://localhost:3000/api/facilities/search?key="+key);
props.SetList(res.data.facilities);
console.log(res);
}

const fetchh=async ()=>{
    const res=await axios.get('api/facilities');
    if(res){
        console.log(res);
       setFacilities(res.data.facilities);
    }
}
  return (
    <div className="bg-black p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-2">Filters</h2>
      <div className="space-y-4">
        {/* Add your filter options here */}
      

        {Facilities.length>0&&
Facilities.map((e,i)=>(

    <div key={i} className="flex items-center">
    <input type="checkbox" onClick={()=>{SetKey(e)}} id="filter1" className="mr-2" />
    <label htmlFor="filter1">{e}</label>
  </div>
))
       
}
<button onClick={()=>HandleCheck()}>Set Jobs</button>

        {/* Add more filter options as needed */}
      </div>
    </div>
  );
};

export default Filters;
