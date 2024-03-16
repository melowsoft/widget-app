import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TaskGroup from '..';

const dummyGroup = {
  name: 'Personal retrospective',
  tasks: [
    {
      description: 'Remember a dream',
      value: 15,
      checked: true,
    },
    {
      description: 'Have a crush',
      value: 7,
      checked: true,
    },
  ],
};

describe('TaskGroup Component', () => {
  test('renders group name and toggle button', () => {
    render(<TaskGroup group={dummyGroup} />);

    const groupNameElement = screen.getByText(dummyGroup.name);
    expect(groupNameElement).toBeInTheDocument();

    const toggleButtonElement = screen.getByRole('button', { name: /Show/i });
    expect(toggleButtonElement).toBeInTheDocument();
  });

  test('expands and collapses group content when toggle button clicked', () => {
    render(<TaskGroup group={dummyGroup} />);

    const toggleButtonElement = screen.getByRole('button', { name: /Show/i });
    fireEvent.click(toggleButtonElement);

    expect(screen.getByText(/Hide/i)).toBeInTheDocument();

    fireEvent.click(toggleButtonElement);

    expect(screen.getByText(/Show/i)).toBeInTheDocument();
  });

  test('renders task components when group is expanded', () => {
    render(<TaskGroup group={dummyGroup} />);

    const toggleButtonElement = screen.getByRole('button', { name: /Show/i });
    fireEvent.click(toggleButtonElement);

    dummyGroup.tasks.forEach(task => {
      expect(screen.getByText(task.description)).toBeInTheDocument();
    });
  });
});
