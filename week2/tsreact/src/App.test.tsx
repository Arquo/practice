import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Define the data for 5 famous foods
const foods = [
  {
    name: 'Pizza',
    ingredients: ['Dough', 'Tomato sauce', 'Cheese', 'Toppings of your choice'],
    instructions: '1. Roll out the dough. 2. Spread tomato sauce on top. 3. Sprinkle cheese and add toppings. 4. Bake in the oven until golden brown.',
  },
  // Define data for other foods...
];

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});