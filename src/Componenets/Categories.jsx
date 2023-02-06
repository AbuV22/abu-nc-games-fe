import React from "react";
import { useEffect, useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://abu-games.onrender.com/api/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(data.categories);
      });
  }, []);

  return categories.map((category) => {
    return (
      <section key={category.id}>
        <button id="categories">{category.slug}</button>
      </section>
    );
  });
};

export default Categories;
