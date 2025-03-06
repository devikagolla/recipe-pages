import React from "react";
import "../styles/styles.css";

const RecipeCard = ({ recipe }) => {
  return (
    <>
    <div className="recipe-card">
      <img src={recipe.imgUrl} alt={recipe.name} />
      <div className="recipe-details">
        <h3>{recipe.name}</h3>
        <p><strong>Chef:</strong> {recipe.chef}</p>
        <p><strong>Rating:</strong> {recipe.avgRating} ⭐ ({recipe.totalRatings} reviews)</p>
        <p>{recipe.description}</p>
      </div>
    </div>
    </>
  );
};

export default RecipeCard;
