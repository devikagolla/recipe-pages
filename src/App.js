import React from "react";
import RecipeList from "./components/RecipeList";
import "./styles/styles.css";


function App() {
  return (
    <div className="bg-container">
    <h1 className="heading">Recipe Contest</h1>
      <RecipeList />
      </div>
  );
}

export default App;
