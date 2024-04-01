
import React from 'react';
import FoodRecipe from './isThisComponent/FoodRecipe';
import foods from './isThisComponent/foodsData';


// Define the main App component
const App = () => {
  return (
    <div>
      <h1>Famous Foods Recipes</h1>
      {foods.map((food) => (
        <FoodRecipe food={food} />
      ))}
    </div>
  );
};

export default App;