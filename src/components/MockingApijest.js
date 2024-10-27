import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard'; // Make sure to import your RecipeCard component

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/api/recipes');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchRecipes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {recipes.length === 0 ? (
        <div>No recipes found.</div>
      ) : (
        recipes.map(recipe => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))
      )}
    </div>
  );
};

export default RecipeList;
