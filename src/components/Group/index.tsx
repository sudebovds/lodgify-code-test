import React, { FC } from 'react'
import { IGroupInterface } from '../../types'
import TaskItem from './taskItem'

//Styles
import './style.css';

const Group: FC<IGroupInterface> = ({ groupName, tasks }) => {
  return (
    <details className='groupContainer'>
        <summary className='groupHeader'>
            <div className='groupName'>{groupName}</div>
            <div className='showMore'>Show</div>
            <div className='showLess'>Hide</div>
        </summary>
        <div className='groupContent'>
            {tasks.map(task => (
                <TaskItem 
                    name={task.name}
                    key={task.name}
                />
            ))}             
        </div>
    </details>
  )
}

export default Group