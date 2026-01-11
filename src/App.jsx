import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext } from 'react'
import { AuthData } from './context/AuthProvider'

const App = () => {
  
   const [userData,setUserData]=useContext(AuthData) 

  
   const [user, setUser] = useState(null)
   const [loggedInuser, setLoggedInuser] = useState(null)

   useEffect(function(){
    const userData=localStorage.getItem('loggedInuser')
    if(loggedInuser){
      setUser(userData.role)
      setLoggedInuser(userData.data)
    }
   },[])

   const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password==123){
      setUser('admin')
       localStorage.setItem('loggedInuser',JSON.stringify({role:'admin'}))
    }
    else if(userData ){
      const employee=userData.find((e)=>email==e.email && password==e.password)
      if(employee){
        setLoggedInuser(employee)
        setUser('employee')
        localStorage.setItem('loggedInuser',JSON.stringify({role:'employee',data:employee}))
      }
    }
    else{
      alert('Invalid Credentials')
    }
   }
   
  return (
    <div className='w-full min-h-screen overflow-auto text-white bg-black'>
      {!user ?<Login handleLogin={handleLogin}/>:
      user=='admin'? <AdminDashboard/>:<EmployeeDashboard data={loggedInuser}/>}
    </div>
  )
}

export default App