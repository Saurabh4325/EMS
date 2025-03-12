import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashBorad = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen w-full'>
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashBorad
