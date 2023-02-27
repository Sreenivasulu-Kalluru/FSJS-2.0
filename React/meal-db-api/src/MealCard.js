import React from 'react';
import './MealCard.css';

const MealCard = ({ meal }) => {
  return (
    meal.strMealThumb.match(/\.(jpeg|jpg|png|gif)$/) != null && (
      <div className="meal-card">
        <img className="meal-card-img" src={meal.strMealThumb} alt="meal-img" />
        <h3 className="meal-card-title">{meal.strMeal}</h3>
        <a href={meal.strYoutube}>Watch</a>
      </div>
    )
  );
};

export default MealCard;
