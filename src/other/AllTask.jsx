import React, { useContext } from 'react'
import { AuthData } from '../context/AuthProvider'

const AllTask = () => {

  const [userData,setUserData]=useContext(AuthData)
    
   
  return (
    <div className='bg-zinc-900 rounded-md  mt-3  w-full p-3 h-90'>
        <div className='bg-red-500 p-3 flex justify-between mt-1 rounded-sm text-md font-medium'>
            <h3 className='w-1/5 '>Employee Name</h3>
            <h3 className='w-1/5 '>New Task</h3>
            <h3 className='w-1/5 '>Active Task</h3>
            <h3 className='w-1/5 '>Completed</h3>
            <h3 className='w-1/5 '>Failed</h3>
        </div>
       <div className=''>
         {userData?.map(function(elem,idx){
            return <div key={idx} className=' border-emerald-400 p-2 border-2 flex justify-between  mt-2 rounded-sm text-md font-medium'>
            <h3 className='w-1/5 ml-4 text-lg text-white'>{elem.firstName}</h3>
            <h3 className='w-1/5 ml-3 text-lg text-blue-400'>{elem.taskCount.newTask}</h3>
            <h3 className='w-1/5 ml-3 text-lg text-yellow-400'>{elem.taskCount.active}</h3>
            <h3 className='w-1/5 ml-3 text-lg text-green-500'>{elem.taskCount.completed}</h3>
            <h3 className='w-1/5 ml-2 text-lg text-red-500'>{elem.taskCount.failed}</h3>
        </div>
       
        })}
        </div> 
    </div>
  )
}

export default AllTask