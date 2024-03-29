import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProgressBar from '@ramonak/react-progress-bar';
import Accordion from '../Accordion';
import { Main } from './style';

const API_URL =
  'https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tasksData, setTasksData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL); 
        setTasksData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state here
      }
    };

    fetchData();
  }, []);

  const handleToggle = toggledTask => {
    const updatedTasksData = tasksData.map(group => ({
      ...group,
      tasks: group.tasks.map(task => (task === toggledTask ? { ...task, checked: !task.checked } : task))
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
    <Main>
      {loading ? (
        <div>Loading data. Please wait...</div>
      ) : (
        <>
          <div className='progress-bar-wrapper'>
            <h1>Lodgify Grouped Tasks</h1>
            <ProgressBar
              completed={Math.round(parseInt(progress)) || 0}
              baseBgColor='#E6FDF9'
              bgColor='#02BC9C'
              label={`Progress: ${Math.round(parseInt(progress))}%`}
            />
          </div>
          <Accordion data={tasksData} onToggle={handleToggle} />
        </>
      )}
    </Main>
  );
};

export default App;
