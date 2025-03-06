import React from "react";

const FilterPanel = ({ filters, setFilters }) => {
  const toggleFilter = (category, value) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category] === value ? null : value
    }));
  };

  return (
    <div className="filter-panel">
      <h2 className="filter">Filters</h2>
      <button onClick={() => setFilters({})} className="clear-filters">Clear All</button>
      <div className="filters">
        {["Contest Winner", "Featured", "Test Kitchen-Approved"].map((attr) => (
          <button key={attr} onClick={() => toggleFilter("attributes", attr)} className="filter-button">
            {attr}
          </button>
        ))}
        {["Dinner", "Lunch", "Dessert", "Breakfast"].map((meal) => (
          <button key={meal} onClick={() => toggleFilter("mealType", meal)} className="filter-button">
            {meal}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
