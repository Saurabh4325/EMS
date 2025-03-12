import React from 'react'

const CreateTask = () => {
    return (
        <div>
            <div className='bg-blue-900'>
                <form className='flex items-start justify-between' action="">
                    <div>
                        <h3>Task Title</h3>
                        <input type="text" placeholder='make a ui design' />
                    </div>
                    <div>
                        <h3>Description</h3>
                        <textarea className='bg-green-900' name="" id="" cols="30" rows="5" placeholder='write your conetent here'></textarea>
                    </div>
                    <div>
                        <h3>Date</h3>
                        <input type="date" name="" id="" />
                    </div>
                    <div>
                        <h3>assign to</h3>
                        <input type="text" placeholder='employ name' />
                    </div>
                    <div>
                        <h3>Category</h3>
                        <input type="text" placeholder='developer,design name' />
                    </div>
                    <div><button className='bg-amber-500 flex align-middle'>Create Task</button></div>
                </form>
            </div>
        </div>
    )
}

export default CreateTask
