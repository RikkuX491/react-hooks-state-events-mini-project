import React from "react";

function CategoryFilter({categories, selectedCategory, updateSelectedCategory}) {

  const buttonElements = categories.map((category) => {
    return <button key={category} onClick={updateSelectedCategory} className={selectedCategory === category ? "selected" : ""}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonElements}
    </div>
  );
}

export default CategoryFilter;
