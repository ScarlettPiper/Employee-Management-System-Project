import React, { useContext, useState } from 'react'
import { AuthData } from '../context/AuthProvider'

const Header = () => {

  const logOutUser=()=>{
    localStorage.setItem('loggedInuser','')
    window.location.reload()
  }
  return (
        <div className='flex bg-gray-900  justify-between p-7'>
            <h1 className='font-bold text-xl'>Hello,<br/> <span className='text-3xl font-semibold'>Admin</span> </h1>
            <button onClick={logOutUser} className='bg-red-700 m-3 p-3 rounded-md'>Log Out</button>
        
    </div>
  )
}

export default Header