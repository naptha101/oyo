import axios from "axios";
import Hotel from "../components/Hotel"
import { useRouter } from "next/router";
import Filters from "../components/Filters";
import { useState } from "react";


const index = ({hotels}) => {
  //console.log(hotels);
  const router=useRouter();
  const [range,SetRange]=useState(100);
  const [list,SetList]=useState([]);
const HandleRange=async ()=>{
    const res=await axios.get('http://localhost:3000/api/hotel/range?range='+range);
    SetList(res.data.hots);
}
  return (
    <div>
      <Filters  SetList={SetList}></Filters>
      <input type="range" min={100} max={500} onChange={(e)=>SetRange(e.target.value)}></input>
      <button onClick={()=>HandleRange()}>Set Range:- {range}</button>
          <div className="m-5" >
           {
             list.length===0?hotels.map((e,i)=>(
       
 <Hotel onClick={()=>{router.push('/'+e._id)}} key={i} hotel ={e} ></Hotel> 
              )):list.map((e,i)=>(
                <Hotel onClick={()=>{router.push('/'+e._id)}} key={i} hotel ={e} ></Hotel>
              ))
  
            }
    </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  //console.log(context.query);
  console.log(process.env.BASE_URL)
  const res=await axios.get(process.env.BASE_URL+'/api/hotel');
  //const data= await res.json();
   //console.log(res.data);
  return {
    props: { hotels: res.data.hotels1 }, // will be passed to the page component as props
  }
}

export default index