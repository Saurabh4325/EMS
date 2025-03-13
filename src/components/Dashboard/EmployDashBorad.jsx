import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployDashBorad = ({changeUser,data}) => {
  return (
    <div>
      <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser ={changeUser} data={data}/>
        <TaskListNumber data={data} />
        <TaskList data={data} />
      </div>
    </div>
  )
}

export default EmployDashBorad
