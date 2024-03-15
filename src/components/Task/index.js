import React from 'react';
import {Wrapper} from './style';

const Task = ({task, onToggle}) => {
  const {description, checked} = task;

  return (
    <Wrapper>
      <label>
        <input type='checkbox' checked={checked} onChange={onToggle} />
        <p>{description}</p>
      </label>
    </Wrapper>
  );
};

export default Task;
