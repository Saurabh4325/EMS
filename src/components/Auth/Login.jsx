import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    // console.log(handleLogin)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e)=>{
      e.preventDefault();
      handleLogin(email,password)
      setEmail('')
      setPassword('')
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-1 p-3.5 rounded-2xl'>
            <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col'>
                <input required className='border-2 outline-none mb-1 border-white-600 rounded-4xl placeholder:text-gray-400 pl-3' type="email" placeholder='Enter your Email' onChange={(e)=>{setEmail(e.target.value)}}/>
                <input required className='border-2 outline-none border-white-600 rounded-4xl placeholder:text-gray-400 pl-3' type="password" placeholder='Enter your Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                <button className='mt-5 border-2 border-red-400 w-18 ml-13 rounded-2xl hover:bg-red-500'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
