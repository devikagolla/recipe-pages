import React from "react";

const SortOptions = ({ setSortOption }) => {
  return (
    <select onChange={(e) => setSortOption(e.target.value)} className="sort-options">
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
      <option value="highest-rated">Highest Rated</option>
      <option value="lowest-rated">Lowest Rated</option>
    </select>
  );
};

export default SortOptions;
