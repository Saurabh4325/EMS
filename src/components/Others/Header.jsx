import React from 'react'

const Header = ({changeUser}) => {
  const logOutUser = () =>{
    localStorage.setItem('loggedInUser','')
    changeUser('')
  }
  return (
    <div>
        <div className='flex justify-between align-center'>
            <h1 className='text-2xl'>hello <br /><span className='text-3xl font-semibold'>Saurabh👋</span></h1>
            <div><button onClick={logOutUser} className='bg-red-600 px-5 py-2 rounded-full cursor-pointer hover:bg-green-600 transform duration-300' href='/'>logout</button></div>
        </div>
    </div>
  )
}

export default Header
