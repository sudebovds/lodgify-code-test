import React, { FC } from 'react'
import { ITask } from '../../types'

const TaskItem: FC<ITask> = ({ name }) => {
  return (
    <label className='groupRow'>
        {name}
        <input type='checkbox' /> 
        <span className="checkmark"></span>
    </label>
  )
}

export default TaskItem