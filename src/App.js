import React, { useState, useEffect } from 'react';

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

const Task = ({ task, onToggle }) => {
  const { description, checked } = task;

  return (
    <div>
      <label>
        <input type="checkbox" checked={checked} onChange={onToggle} />
        {description}
      </label>
    </div>
  );
};

const TaskGroup = ({ group, onToggle, index }) => {
  const [isExpand, setIsExpand] = useState(false)
  const { name, tasks } = group;

  return (
    <div>
      <h2>{name}</h2>
      <div>
        <h5 onClick={() => setIsExpand(!isExpand)}>Group {index + 1}</h5>
        {
          isExpand && (
            <div>
            {tasks.map((task, index) => (
              <Task key={index} task={task} onToggle={() => onToggle(task)} />
            ))}
              </div>
          )
      }
      </div>
    </div>
  );
};

const Accordion = ({ data, onToggle }) => {
  return (
    <div>
      {data.map((group, index) => (
        <TaskGroup key={index} index={index} group={group} onToggle={onToggle} />
      ))}
    </div>
  );
};

const App = () => {
  const [tasksData, setTasksData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTasksData(mockData);
    }, 1000);
  }, []);

  const handleToggle = (toggledTask) => {
    const updatedTasksData = tasksData.map((group) => ({
      ...group,
      tasks: group.tasks.map((task) =>
        task === toggledTask ? { ...task, checked: !task.checked } : task
      ),
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
    return (sumValues * 100) / tasksData.reduce((acc, group) => {
      return (
        acc +
        group.tasks.reduce((acc, task) => {
          return acc + task.value;
        }, 0)
      );
    }, 0);
  };

  const progress = calculateProgress();

  return (
    <div>
      <h1>Task Progress: {Math.round(progress)}%</h1>
      <Accordion data={tasksData} onToggle={handleToggle} />
    </div>
  );
};

export default App;

