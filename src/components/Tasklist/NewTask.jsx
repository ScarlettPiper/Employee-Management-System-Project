import React from 'react'

const NewTask = (props) => {
  return (
    <div className='flex-shrink-0 bg-red-500 w-70 h-70 rounded-md'>
       <div className='flex justify-between m-3'>
         <h2  className='bg-red-700 text-md font-base px-2 py-1 rounded-md'>{props.data.category}</h2>
         <h4 className='text-md font-medium'>{props.data.date}</h4>
       </div>
       <h4 className='m-3 text-xl font-bold pt-5'>{props.data.title}</h4>
       <p className='text-lg font-base m-3'>{props.data.description}</p>
       <div className='mt-5'>
        <button className='bg-yellow-500 rounded-md text-sm p-1 '>Accept Task</button>
       </div>
    </div>
  )
}

export default NewTask