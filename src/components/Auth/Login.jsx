import React, { useState } from 'react'

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        props.handleLogin(email,password)
        setEmail('')
        setPassword('')
    }
  return (
    <div className=' w-full h-screen text-white bg-zinc-900' >
      <div className='absolute left-[37%] top-[31%] h-67 w-79 border-2 rounded-lg border-green-700 p-9'>
        <div className='flex justify-center items-center '>
          <h2 className='text-2xl font-semibold'>Login</h2>
        </div>
        <form onSubmit={(e)=>{
            handleSubmit(e)
        }} className='flex flex-col justify-center  mt-5 gap-2 '>
            <input required className='border-2 placeholder:text-gray-300  border-green-700 outline-none bg-transparent rounded-3xl p-2'
            value={email} 
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
             type='email' placeholder='Enter the email'/>
            <input required className='border-2 placeholder:text-gray-300 border-green-700 outline-none bg-transparent rounded-3xl p-2'
            value={password}
             onChange={(e)=>{
                setPassword(e.target.value)
            }}
             type='password' placeholder='Enter Password'/>
            <input className='border-2 border-none bg-green-700 mt-1 font-small rounded-3xl p-1' type='submit' value='LOG IN'/>
        </form>
      </div>
    </div>
  )
}

export default Login
