import React from 'react';
import TaskGroup from '../TaskGroup/TaskGroup';

const Accordion = ({ data, onToggle }) => {
  return (
    <div>
      {data.map((group, index) => (
        <TaskGroup key={index} index={index} group={group} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default Accordion;
