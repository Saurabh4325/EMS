import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashBorad = ({changeUser}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen w-full'>
      <Header changeUser  ={changeUser}/>
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashBorad
