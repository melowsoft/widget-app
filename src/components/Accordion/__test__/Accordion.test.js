import React from 'react';
import { render, screen } from '@testing-library/react';
import Accordion from '..';

const dummyData = [
  {
    name: 'General Info',
    tasks: [
      { description: 'Add name and surname', value: 10, checked: true },
      { description: 'Add email', value: 15, checked: false },
      { description: 'Add linkedin profile', value: 8, checked: false },
      { description: 'Provide websites page url', value: 5, checked: true },
    ],
  },
  {
    name: 'Accomiplishments',
    tasks: [
      { description: 'Wrote a small poem about the birthday', value: 23, checked: false },
      { description: 'Jump three times with one leg', value: 32, checked: true },
      { description: 'Avoid the annoying neighbor', value: 2, checked: false },
      { description: 'Say hello to a random person', value: 21, checked: false },
      { description: 'Fill the description in at least 3 places', value: 12, checked: true },
    ],
  },
  {
    name: 'Personal retrospective',
    tasks: [
      { description: 'Remember a dream', value: 15, checked: true },
      { description: 'Have a crush', value: 7, checked: true },
    ],
  },
  {
    name: 'Things before leaving',
    tasks: [
      { description: 'Say what you feel to all the people you know', value: 42, checked: false },
      { description: 'Get a pet', value: 23, checked: false },
      { description: 'Buy a fashion shirt', value: 12, checked: false },
    ],
  },
];

describe('Accordion Component', () => {
  test('renders all task groups', () => {
    render(<Accordion data={dummyData} />);

    dummyData.forEach(group => {
      expect(screen.getByText(group.name)).toBeInTheDocument();
    });
  });

  test('renders correct number of task groups', () => {
    render(<Accordion data={dummyData} />);

    expect(screen.queryAllByRole('group')).toHaveLength(dummyData.length);
  })
});
