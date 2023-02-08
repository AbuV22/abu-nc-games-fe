import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
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
    if (selectedCategory === "") {
      navigate("/review");
    } else {
      navigate(`${selectedCategory}`);
    }
  };
  const formatCategoryName = (name) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
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
              {formatCategoryName(category.slug)}
            </option>
          );
        })}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Categories;
