import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import App from './App';

test('renders task progress', () => {
  render(<App />);
  const progressText = screen.getByText(/Task Progress:/i);
  expect(progressText).toBeInTheDocument();
});

test('renders task groups and tasks', () => {
  render(<App />);
  const taskGroups = screen.getAllByRole('heading', {level: 2});
  expect(taskGroups).toHaveLength(2); // Assuming there are 2 task groups
  const tasks = screen.getAllByRole('checkbox');
  expect(tasks).toHaveLength(8); // Assuming there are 8 tasks in total
});

test('toggles task completion', () => {
  render(<App />);
  const taskCheckbox = screen.getByLabelText(/Add email/i); // Assuming this task is unchecked initially
  fireEvent.click(taskCheckbox);
  expect(taskCheckbox).toBeChecked();
});

test('expands and collapses task groups', () => {
  render(<App />);
  const groupHeading = screen.getByRole('heading', {name: /General Tech/i}); // Assuming this group is initially collapsed
  expect(groupHeading).toBeInTheDocument();
  fireEvent.click(screen.getByText(/Group 1/i)); // Clicking to expand the group
  const tasks = screen.getAllByRole('checkbox');
  expect(tasks).toHaveLength(4); // Assuming there are 4 tasks in the expanded group
});
