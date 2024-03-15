import React, {useState, useEffect} from 'react';
import Accordion from '../Accordion/Accordion';

const mockData = [
  {
    name: 'General Tech',
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
    name: 'General Socials',
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
    <div>
      <h1>Task Progress: {loading ? 'Loading...' : `${Math.round(parseInt(progress))}%`}</h1>
      <Accordion data={tasksData} onToggle={handleToggle} />
    </div>
  );
};

export default App;
