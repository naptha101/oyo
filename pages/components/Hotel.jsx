import Image from 'next/image'
import { useRouter } from 'next/router';
import React from 'react'

const Hotel = (props) => {
  const hotel=props.hotel;
  const router=useRouter();
  return (
    <div onClick={()=>{router.push('/Hotels/'+hotel._id)}} className='flex border-red-400 w-full h-96 p-4 border-2 border rounded-lg'>
  
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

export default Hotel