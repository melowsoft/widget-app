import React, {useState} from 'react';
import Task from '../Task';
import {MdExpandMore, MdExpandLess} from 'react-icons/md';
import {PiClipboardTextLight} from 'react-icons/pi';
import {BsClipboardCheck} from 'react-icons/bs';
import {Wrapper} from './style';

const TaskGroup = ({group, onToggle}) => {
  const [isExpand, setIsExpand] = useState(false);
  const {name, tasks} = group;

  const handleToggle = () => {
    setIsExpand(!isExpand);
  };

  return (
    <Wrapper>
      <fieldset aria-labelledby={`group-header-${name}`} aria-expanded={isExpand}>
        <div id={`group-header-${name}`} className='group-header'>
          <div className='header-title-wrap'>
            {isExpand ? (
              <BsClipboardCheck style={{color: isExpand ? '#02BC9C' : '#000'}} className='clipboard-icon' />
            ) : (
              <PiClipboardTextLight className='clipboard-icon' />
            )}
            <p style={{color: isExpand ? '#02BC9C' : '#000'}}>{name}</p>
          </div>
          <button className='expand-button' onClick={handleToggle}>
            <p>{isExpand ? 'Hide' : 'Show'}</p>
            {isExpand ? <MdExpandLess /> : <MdExpandMore />}
          </button>
        </div>
        {isExpand && (
          <div className='group-content'>
            {tasks.map((task, index) => (
              <Task key={index} task={task} onToggle={() => onToggle(task)} />
            ))}
          </div>
        )}
      </fieldset>
    </Wrapper>
  );
};

export default TaskGroup;
