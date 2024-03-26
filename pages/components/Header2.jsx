'use client'
import React from 'react'

const Header2 = () => {
  return (
    <div className='w-full flex items-center justify-center py-5 px-3 bg-green-600'>

       <div className='grid grid-cols-5'>
       <input
       className='py-2 px-1 col-span-2 border border-black border-1 outline-none text-black'
       placeholder='search by city or state'
       type="text"
       >
       </input>
       <input
       className='py-2 px-1 col-span-1 border border-black border-1 outline-none text-black'
       placeholder='enter date'
       type='date'
       >
       </input>
       <input
     type="date"
       className='py-2 px-1 col-span-1  border border-black border-1 outline-none text-black'
       placeholder='seacr by city or state'
       >
       </input>

    <button
    className='col-span-1 bg-red-400'
    >
        Search
    </button>

       </div>

    
      </div>
  )
}

export default Header2