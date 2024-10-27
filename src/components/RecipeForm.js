import React, { useState } from 'react';

const RecipeForm = ({ addRecipe }) => {
  const [recipeName, setRecipeName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipeName) {
      setError('Recipe name is required.');
    } else {
      addRecipe(recipeName);
      setRecipeName('');
      setError('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Recipe</h2>
      <label htmlFor="recipeName">Recipe Name</label>
      <input
        type="text"
        id="recipeName"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        aria-describedby="recipeNameError"
        required
      />
      <span id="recipeNameError" role="alert" aria-live="assertive">
        {error}
      </span>
      <button type="submit">Submit Recipe</button>
    </form>
  );
};

export default RecipeForm;
