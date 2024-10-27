/ RecipeCartest.js
import { render, screen, fireEvent } from '@testing-library/react';
import RecipeCard from './RecipeCard.js';

test('renders recipe title and ingredients', () => {
  render(<RecipeCard title="Pasta" ingredients={['Pasta', 'beef', 'chicken', 'dessert', 
  'lamb', 'miscellaneous', 'pork', 
  'seafood', 'side', 'starter', 
  'vegan', 'vegetarian', 'breakfast', 'goat']} />);
  
  expect(screen.getByRole('heading', { name: /Pasta/i })).toBeInTheDocument();
  expect(screen.getByText(/Pasta/i)).toBeInTheDocument();
  expect(screen.getByText(/beef/i)).toBeInTheDocument();
  expect(screen.getByText(/chicken/i)).toBeInTheDocument();
  expect(screen.getByText(/dessert/i)).toBeInTheDocument();
  expect(screen.getByText(/lamb/i)).toBeInTheDocument();
  expect(screen.getByText(/miscellaneous/i)).toBeInTheDocument();
  expect(screen.getByText(/pork/i)).toBeInTheDocument();
  expect(screen.getByText(/seafood/i)).toBeInTheDocument();
  expect(screen.getByText(/side/i)).toBeInTheDocument();
  expect(screen.getByText(/starter/i)).toBeInTheDocument();
  expect(screen.getByText(/vegan/i)).toBeInTheDocument();
  expect(screen.getByText(/vegetarian/i)).toBeInTheDocument();
  expect(screen.getByText(/breakfast/i)).toBeInTheDocument();
  expect(screen.getByText(/goat/i)).toBeInTheDocument();

});

test('calls onClick when button is clicked', () => {
  const handleClick = jest.fn();
  render(<RecipeCard title="Pasta" ingredients={[]} onClick={handleClick} />);
  
  fireEvent.click(screen.getByRole('button', { name: /view recipe/i }));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
