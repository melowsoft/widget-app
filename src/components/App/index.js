import React, {useState, useEffect} from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import Accordion from '../Accordion';
import {Wrapper} from './style';

const mockData = [
  {
    name: 'Profile Task',
    tasks: [
      {
        description: 'Add name and surname',
        value: 10,
        checked: true
      },
      {
        description: 'Add email',
        value: 15,
        checked: false
      },
      {
        description: 'Add linkedin profile',
        value: 8,
        checked: false
      },
      {
        description: 'Provide websites page url',
        value: 5,
        checked: true
      }
    ]
  },
  {
    name: 'General Task',
    tasks: [
      {
        description: 'Add name and surname',
        value: 10,
        checked: true
      },
      {
        description: 'Add email',
        value: 15,
        checked: false
      },
      {
        description: 'Add linkedin profile',
        value: 8,
        checked: false
      },
      {
        description: 'Provide websites page url',
        value: 5,
        checked: true
      }
    ]
  },
  {
    name: 'Finance Task',
    tasks: [
      {
        description: 'Add name and surname',
        value: 10,
        checked: true
      },
      {
        description: 'Add email',
        value: 15,
        checked: false
      },
      {
        description: 'Add linkedin profile',
        value: 8,
        checked: false
      },
      {
        description: 'Provide websites page url',
        value: 5,
        checked: true
      }
    ]
  }
];

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tasksData, setTasksData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTasksData(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleToggle = toggledTask => {
    const updatedTasksData = tasksData.map(group => ({
      ...group,
      tasks: group.tasks.map(task => (task === toggledTask ? {...task, checked: !task.checked} : task))
    }));
    setTasksData(updatedTasksData);
  };

  const calculateProgress = () => {
    const sumValues = tasksData.reduce((acc, group) => {
      return (
        acc +
        group.tasks.reduce((acc, task) => {
          return acc + (task.checked ? task.value : 0);
        }, 0)
      );
    }, 0);
    return (
      (sumValues * 100) /
      tasksData.reduce((acc, group) => {
        return (
          acc +
          group.tasks.reduce((acc, task) => {
            return acc + task.value;
          }, 0)
        );
      }, 0)
    );
  };

  const progress = calculateProgress();

  return (
    <Wrapper>
      <div className='progress-bar-wrapper'>
        <h1>Lodgify Grouped Tasks</h1>
        <ProgressBar completed={60} baseBgColor='#E6FDF9' bgColor='#02BC9C' />
      </div>
      <Accordion data={tasksData} onToggle={handleToggle} />
    </Wrapper>
  );
};

export default App;
