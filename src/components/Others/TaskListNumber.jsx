import React from 'react'

const TaskListNumber = ({data}) => {
  console.log(data)
  return (
    <div className=' w-screen flex justify-center gap-5 mt-5'>
      <div className='p-10 rounded-xl w-[30%] bg-blue-400'> 
        <h2 className='text-2xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-2xl font-semibold'>New Task</h3>
      </div>

      <div className='p-10 rounded-xl w-[30%] bg-green-400'> 
        <h2 className='text-2xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-2xl font-semibold'>New Task</h3>
      </div>
      <div className='p-10 rounded-xl w-[30%] bg-yellow-400'> 
        <h2 className='text-2xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-2xl font-semibold'>New Task</h3>
      </div>
      <div className='p-10 rounded-xl w-[30%] bg-red-400'> 
        <h2 className='text-2xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-2xl font-semibold'>New Task</h3>
      </div>
      {/* <div className='p-10 rounded-xl w-[40%] bg-red-400'> 
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-2xl font-semibold'>New Task</h3>
      </div> */}
    </div>
  )
}

export default TaskListNumber
