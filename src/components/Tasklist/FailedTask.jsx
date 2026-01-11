import React from 'react'

const FailedTask = (props) => {
  return (
    <div className='flex-shrink-0 bg-blue-500 w-70 h-70 rounded-md'>
       <div className='flex justify-between m-3'>
         <h2  className='bg-red-500 text-md font-base px-2 py-1 rounded-md'>{props.data.category}</h2>
         <h4 className='text-md font-medium'>{props.data.date}</h4>
       </div>
       <h4 className='m-3 text-xl font-bold pt-5'>{props.data.title}</h4>
       <p className='text-lg font-base m-3'>{props.data.description}</p>
       <div className='mt-12 m-2 '>
        <button className='w-full bg-red-600 rounded-md text-sm p-1 '>Failed task</button>
       </div>
    </div>
  )
}

export default FailedTask