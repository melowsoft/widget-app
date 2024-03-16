import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import App from '..';

// Mock Axios GET requests
jest.mock('axios');

const mockData = [
  {
    name: 'Group 1',
    tasks: [
      { description: 'Task 1', value: 10, checked: true },
      { description: 'Task 2', value: 20, checked: false },
    ],
  },
  {
    name: 'Group 2',
    tasks: [
      { description: 'Task 3', value: 15, checked: true },
      { description: 'Task 4', value: 25, checked: false },
    ],
  },
];

describe('App Component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValueOnce({ data: mockData });
  });

  test('renders fetched data and progress bar after successful data fetching', async () => {
    render(<App />);

    await waitFor(() => expect(screen.getByText('Lodgify Grouped Tasks')).toBeInTheDocument());

    // Click on the expand buttons of both Accordions to reveal the tasks
    const expandButtons = screen.getAllByRole('button', { name: /Show/i });
    expandButtons.forEach(button => {
      userEvent.click(button);
    });

    // Now, all tasks should be visible
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
    expect(screen.getByText('Task 4')).toBeInTheDocument();
  });
});
