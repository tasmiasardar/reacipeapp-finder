// RecipeListtest.js
import { render, screen, fireEvent } from '@testing-library/react';
import RecipeList from './RecipeList';

const recipes = [
  { id: 1, title: 'Pasta', ingredients: ['Pasta', 'Tomato Sauce'], category: 'Pasta' },
  { id: 2, title: 'Beef Stew', ingredients: ['Beef', 'Carrots'], category: 'beef' },
  { id: 3, title: 'Chicken Salad', ingredients: ['Chicken', 'Lettuce'], category: 'chicken' },
  { id: 4, title: 'Chocolate Cake', ingredients: ['Chocolate', 'Flour'], category: 'dessert' },
  // Add other recipes for additional categories
];

test('displays all recipes initially', () => {
  render(<RecipeList recipes={recipes} />);
  
  expect(screen.getByRole('option', { name: /all/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /pasta/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /beef stew/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /chicken salad/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /chocolate cake/i })).toBeInTheDocument();
});

test('displays recipes filtered by selected category', () => {
  render(<RecipeList recipes={recipes} />);

  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'beef' } });

  expect(screen.queryByRole('heading', { name: /pasta/i })).not.toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: /chicken salad/i })).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /beef stew/i })).toBeInTheDocument();
});

test('displays no recipes when category has no matches', () => {
  render(<RecipeList recipes={recipes} />);
  
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'dessert' } });

  expect(screen.getByRole('heading', { name: /chocolate cake/i })).toBeInTheDocument();
});
