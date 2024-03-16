import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Task from '..';

describe('Task Component', () => {
  test('renders task description and checkbox', () => {
    const task = {
      description: 'Sample Task',
      checked: false,
    };

    render(<Task task={task} />);

    const descriptionElement = screen.getByText(task.description);
    expect(descriptionElement).toBeInTheDocument();

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement.checked).toBe(task.checked);
  });

  test('toggles checkbox when clicked', () => {
    const task = {
      description: 'Sample Task',
      checked: false,
    };
    const onToggleMock = jest.fn();

    render(<Task task={task} onToggle={onToggleMock} />);

    const checkboxElement = screen.getByRole('checkbox');
    fireEvent.click(checkboxElement);

    expect(onToggleMock).toHaveBeenCalledTimes(1);
  });
});
