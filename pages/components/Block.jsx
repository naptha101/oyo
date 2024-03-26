import React from 'react'

const Block = (props) => {
 const para1=props.heading ;
 const para2=props.para;
  return (
    <div className='px-4 gap-2 border-gray-300 border-2 border py-2 flex flex-row items-center justify-center'>
<p1 className="text-xl font-bold" >{para1}</p1>
<p1 >{para2}</p1>

    </div>
  )
}

export default Block