// RecipeList.js
import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard.js';

const categories = [
  'Pasta', 'beef', 'chicken', 'dessert', 
  'lamb', 'miscellaneous', 'pork', 
  'seafood', 'side', 'starter', 
  'vegan', 'vegetarian', 'breakfast', 'goat'
];

const RecipeList = ({ recipes }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredRecipes = selectedCategory === 'All' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === selectedCategory);

  return (
    <div>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="All">All</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      {filteredRecipes.map(recipe => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </div>
  );
};

export default RecipeList;

