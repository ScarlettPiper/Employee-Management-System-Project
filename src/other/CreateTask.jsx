import React, { useContext, useState } from 'react'
import { AuthData } from '../context/AuthProvider'

const CreateTask = () => {
  const[userData,setUserData]=useContext(AuthData)

  const [newTask,setNewTask] = useState({})

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [date, setDate] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    setNewTask({title,description,assignTo,date,category,active:false,newTask:true,completed:false,failed:false})

    const data=userData

    data.forEach(function(elem,idx){
      if(elem.firstName==assignTo){
        elem.tasks.push(newTask)
        elem.taskCount.newTask=elem.taskCount.newTask+1
      }
    })
    setUserData(data)
    console.log(data)

    setTitle('')
    setDescription('')
    setAssignTo('')
    setDate('')
    setCategory('')

  }
  return (
    <div className='flex justify-between w-full mt-1 p-1 rounded-md bg-zinc-900 '>
        <div className='w-1/2 p-3 '>
          <div className='pt-2 '>
            <h3 className='text-medium font-semibold' >Task Title</h3>
          <input className='border-2 w-110 px-2 py-1 rounded-md placeholder:text-gray-300 '
           value={title}
           onChange={((e)=>{
            setTitle(e.target.value)
           })}
           type='text' 
           placeholder='Make a UI design'/>
          </div>
          <div className='pt-2'>
            <h3 className='text-medium font-semibold' >Date</h3>
          <input className='border-2 w-110 px-2 py-1 rounded-md placeholder:text-gray-300'
          value={date}
          onChange={(e)=>{
            setDate(e.target.value)
          }}
           type='date' placeholder='dd/mm/yyyy'/>
          </div>
         <div className='pt-2'>
           <h3 className='text-medium font-semibold' >Assign to</h3>
          <input className='border-2 w-110 px-2 py-1 rounded-md placeholder:text-gray-300' 
          value={assignTo}
          onChange={(e)=>{
            setAssignTo(e.target.value)
          }}
          type='text' placeholder='employee name'/>
         </div>
          <div className='pt-2'>
            <h3 className='text-medium font-semibold' >Category</h3>
          <input className='border-2 w-110 px-2 py-1 rounded-md placeholder:text-gray-300 '
          value={category}
          onChange={(e)=>{
            setCategory(e.target.value)
          }}
           type='text' placeholder='Design,Dev,etc.'/>
          </div>
        </div> 
        <div className='w-1/2 flex flex-col p-4 w-135 '>
            <h3 className='text-medium font-semibold mt-1' >Description</h3>
            <textarea  value={description} onChange={(e)=>{
              setDescription(e.target.value)
            }} className='h-45 border-2 outline-none rounded-md'/>
            <button onClick={(e)=>{
              submitHandler(e)
            }} className='bg-green-500 cursor-pointer rounded-md mt-5 text-md font-semibold p-1 '>Create Task</button>
        </div>
      </div>
  )
}

export default CreateTask