import React from "react";
import './SortingCategory.scss';

const SortingCategory = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="sorting">
      <h1 className="sorting__title">Filter</h1>

      <ul className="sorting__ul">
        {categories.map((category) => (
          <li className="sorting__li" key={category}>
            <button
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category ? "sorting__button_active" : "sorting__button"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortingCategory;
