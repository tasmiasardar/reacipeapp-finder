import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

test('renders card with news data', () => {
  const data = [{
    urlToImage: 'image_url',
    url: 'FoodRecipe_url',
    title: 'FoodRecipe Title',
    description:'FoodRecipe Description',
  }];
  const { getByText } = render(<Card data={data} />);
  
  expect(getByText('News Title')).toBeInTheDocument();
  expect(getByText('News Description')).toBeInTheDocument();
});
