import React from 'react';
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

export default Accordion;
