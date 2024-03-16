import React from 'react';
import PropTypes from 'prop-types';
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

Task.propTypes = {
  task: PropTypes.shape({
    description: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    checked: PropTypes.bool.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
};