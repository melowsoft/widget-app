import React from 'react';

const Task = ({ task, onToggle }) => {
  const { description, checked } = task;

  return (
    <div>
      <label>
        <input type='checkbox' checked={checked} onChange={onToggle} />
        {description}
      </label>
    </div>
  );
};

export default Task;
