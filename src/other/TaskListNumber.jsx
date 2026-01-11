import React from 'react'

const TaskListNumber = (props) => {
    console.log(props.data)
  return (
    <div className='flex m-5 gap-5'>
        <div className='w-[25%] px-7 py-3 bg-red-500 rounded-md'>
            <h1 className='text-2xl font-semibold'>{props.data.taskCount.newTask}</h1>
            <h4 className='text-lg font-base font'>New Task</h4>
        </div>
        <div className='w-[25%] px-7 py-3 bg-green-500 rounded-md'>
            <h1 className='text-2xl font-semibold'>{props.data.taskCount.completed}</h1>
            <h4 className='text-lg font-base '>Completed Task</h4>
        </div>
        <div className='w-[25%] px-7 py-3 bg-yellow-500 rounded-md text-black'>
            <h1 className='text-2xl font-semibold'>{props.data.taskCount.active}</h1>
            <h4 className='text-lg font-base '>Accepted Task</h4>
        </div>
        <div className='w-[25%] px-7 py-3 bg-blue-500 rounded-md'>
            <h1 className='text-2xl font-semibold'>{props.data.taskCount.failed}</h1>
            <h4 className='text-lg font-base '>Failed Task</h4>
        </div>
    </div>
  )
}

export default TaskListNumber