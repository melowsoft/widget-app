import React, {useState} from 'react';
import Task from '../Task/Task';

const TaskGroup = ({group, onToggle, index}) => {
  const [isExpand, setIsExpand] = useState(false);
  const {name, tasks} = group;

  return (
    <fieldset>
      <legend>
        <h2>{name}</h2>
      </legend>
      <div>
        <button aria-expanded={isExpand} onClick={() => setIsExpand(!isExpand)}>
          Group {index + 1}
        </button>
        {isExpand && (
          <div>
            {tasks.map((task, index) => (
              <Task key={index} task={task} onToggle={() => onToggle(task)} />
            ))}
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default TaskGroup;
