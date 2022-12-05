import React, { FC } from 'react';
import { IGroupInterface } from '../../types';
import TaskItem from './TaskItem';

//Styles
import './style.css';

const Group: FC<IGroupInterface> = ({
  name,
  tasks,
  calculateProgress,
  index,
}) => {
  return (
    <details className="groupContainer" open={index === 0 ? true : false}>
      <summary className="groupHeader">
        <div className="groupName">{name}</div>
        <div className="showMore">Show</div>
        <div className="showLess">Hide</div>
      </summary>
      <div className="groupContent">
        {tasks.map((task) => (
          <TaskItem
            key={task.value}
            description={task.description ?? '<Forgot to name this task>'}
            value={task.value}
            checked={task.checked}
            calculateProgress={calculateProgress}
          />
        ))}
      </div>
    </details>
  );
};

export default Group;
