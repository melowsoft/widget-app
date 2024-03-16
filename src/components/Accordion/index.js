import React from 'react';
import PropTypes from 'prop-types';
import TaskGroup from '../TaskGroup';
import {Wrapper} from './style';

const Accordion = ({data, onToggle}) => {
  return (
    <Wrapper>
      {data.map((group, index) => (
        <TaskGroup key={index} group={group} onToggle={onToggle} />
      ))}
    </Wrapper>
  );
};

Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      tasks: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string.isRequired,
          value: PropTypes.number.isRequired,
          checked: PropTypes.bool.isRequired
        })
      ).isRequired
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired
};

export default Accordion;
