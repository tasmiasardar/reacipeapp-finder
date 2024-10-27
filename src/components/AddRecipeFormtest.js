import { render, screen, fireEvent } from '@testing-library/react';
import AddRecipeForm from './AddRecipeForm';

test('calls onAdd with recipe data on form submit', () => {
  const handleAdd = jest.fn();
  render(<AddRecipeForm onAdd={handleAdd} />);
  
  fireEvent.change(screen.getByPlaceholderText(/recipe title/i), { target: { value: 'Pasta' } });
  fireEvent.change(screen.getByPlaceholderText(/ingredients/i), { target: { value: 'Pasta, Tomato Sauce' } });
  
  fireEvent.click(screen.getByRole('button', { name: /add recipe/i }));
  
  expect(handleAdd).toHaveBeenCalledWith({
    title: 'Pasta',
    ingredients: ['Pasta', ' Tomato Sauce'],
  });
});
