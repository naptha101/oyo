import axios from "axios";
import React from 'react';

const Single = ({hotel}) => {
  //const hotel=props.hotel;
  return (
    <div className='flex border-red-400 w-full h-96 p-4 border-2 border rounded-lg'>
Hello
  
   <div className='flex'>
    <img src={hotel.banner}
     width={400}
     height={30}
    ></img>
    <div className='p-3 gap-4'>
        <p className='font-bold'>
            {hotel.name}
        </p>
<p>{hotel.description}</p>
    <p>Facilities:-</p>
    <div className='flex gap-2'>
   <button className='px-6 py-3 rounded-md bg-blue-200'>Price:{hotel.price}</button>
   <button className='px-6 py-3 rounded-md bg-blue-200'>See Details</button>
    
    </div>
    </div>
    
    </div> 

    </div>
  )
}
export async function getServerSideProps(context) {
  //console.log(context.query.id);
  const res=await axios.get(process.env.BASE_URL+'/api/hotel/'+context.query.id);
  //const data= await res.json();
   console.log(res.data);
  
  return {
    props: { hotel: res.data.hotel }, // will be passed to the page component as props
  }
}

export default Single