import React from 'react'
import TaskListNumber from '../../other/TaskListNumber'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = (props) => {

  const logOutUser=()=>{
    localStorage.setItem('loggedInuser','')
    window.location.reload()
  }

  return (
    <div >
        <div className='flex bg-gray-900  justify-between p-7'>
            <h1 className='font-bold text-xl'>Hello,<br/> <span className='text-4xl font-semibold'>{props.data.firstName}</span> </h1>
            <button onClick={logOutUser} className='bg-red-700 m-3 p-3 rounded-md'>Log Out</button>
        </div>

        <TaskListNumber data={props.data}/>
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard