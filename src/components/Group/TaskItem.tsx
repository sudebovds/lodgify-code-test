import React, { ChangeEvent, FC, useState } from 'react';
import { ITaskInterface } from '../../types';

const TaskItem: FC<ITaskInterface> = ({
  checked,
  description,
  value,
  calculateProgress,
}) => {
  const [checkedItem, setChecked] = useState<boolean>(checked);

  const checkHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (checkedItem) {
      calculateProgress((prev) =>
        Math.round(prev - parseFloat(e.target.value))
      );
      setChecked(e.target.checked);
    } else {
      calculateProgress((prev) =>
        Math.round(prev + parseFloat(e.target.value))
      );
      setChecked(e.target.checked);
    }
  };

  return (
    <label className="groupRow">
      {description}
      <input
        type="checkbox"
        checked={checkedItem}
        value={value}
        onChange={(e) => checkHandler(e)}
      />
      <span className="checkmark"></span>
    </label>
  );
};

export default TaskItem;
