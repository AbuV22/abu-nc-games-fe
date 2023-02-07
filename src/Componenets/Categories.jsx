import React from "react";
import { useEffect, useState } from "react";

const Categories = () => {
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
    console.log("Selected Category:", selectedCategory);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        <option value="">Select a Category</option>
        {categories.map((category) => {
          return (
            <option key={category.id} value={category.slug}>
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
