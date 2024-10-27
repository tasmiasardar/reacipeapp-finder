// RecipeCard.js
import React from 'react';

const RecipeCard = ({ title, ingredients, onClick }) => (
  <div>
    <h2>{title}</h2>
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
    <button onClick={onClick}>View Recipe</button>
  </div>
);

export default RecipeCard;