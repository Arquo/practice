

// FoodRecipe.tsx
import React from 'react';

const FoodRecipe: React.FC<{ food: { name: string, ingredients: string[], instructions: string } }> = ({ food }) => {
  return (
    <div>
      <h2>{food.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {food.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{food.instructions}</p>
    </div>
  );
};

export default FoodRecipe;


