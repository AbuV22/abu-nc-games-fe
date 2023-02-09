import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [localSelectedCategory, setLocalSelectedCategory] = useState("");
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
    if (localSelectedCategory === "") {
      navigate("/review");
    } else {
      navigate(`${localSelectedCategory}`);
    }
  };
  const formatCategoryName = (name) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <>
      <p>Filter By Categories:</p>
      <form onSubmit={handleSubmit}>
        <select
          value={localSelectedCategory}
          onChange={(event) => setLocalSelectedCategory(event.target.value)}
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
    </>
  );
};

export default Categories;

//abu
