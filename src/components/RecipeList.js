import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";
import SortOptions from "./SortOptions";
import FilterPanel from "./FilterPanel";
import recipes from "../data/recipes";
import "../styles/styles.css";

const RecipeList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [filters, setFilters] = useState({});

  let filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filters.mealType) {
    filteredRecipes = filteredRecipes.filter((recipe) => recipe.mealType === filters.mealType);
  }

  if (sortOption === "newest") {
    filteredRecipes.sort((a, b) => new Date(b.uploadedOn) - new Date(a.uploadedOn));
  } else if (sortOption === "oldest") {
    filteredRecipes.sort((a, b) => new Date(a.uploadedOn) - new Date(b.uploadedOn));
  } else if (sortOption === "highest-rated") {
    filteredRecipes.sort((a, b) => b.avgRating - a.avgRating);
  } else if (sortOption === "lowest-rated") {
    filteredRecipes.sort((a, b) => a.avgRating - b.avgRating);
  }

  return (
    <>
      <div className="search-container">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SortOptions setSortOption={setSortOption} />
      </div>
      <FilterPanel filters={filters} setFilters={setFilters} />
        <div className="list-container">{filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.name} recipe={recipe} />
        ))}
        </div>
    </>
  );
};

export default RecipeList;
