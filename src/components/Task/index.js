import React from 'react';
import { Wrapper, LabelText, Checkbox } from './style';

const Task = ({ task, onToggle }) => {
  const { description, checked } = task;

  const handleToggle = () => {
    onToggle();
  };

  return (
    <Wrapper>
      <label>
        <Checkbox type='checkbox' checked={checked} onChange={handleToggle} />
        <LabelText>{description}</LabelText>
      </label>
    </Wrapper>
  );
};

export default Task;
