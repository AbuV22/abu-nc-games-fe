import React from "react";
import { useEffect, useState } from "react";

const Categories = ({ handleCategorySelection }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    fetch("https://abu-games.onrender.com/api/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(data.categories);
      });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    handleCategorySelection(selectedCategory);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        <option value="">All Reviews</option>
        {categories.map((category, index) => {
          return (
            <option key={index} value={category.slug}>
              {category.slug}
            </option>
          );
        })}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Categories;
