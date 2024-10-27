// AddRecipeForm.js
import React, { useState } from 'react';

const AddRecipeForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, ingredients: ingredients.split(',') });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ingredients (comma-separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};