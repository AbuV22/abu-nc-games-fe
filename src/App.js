import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import ReviewList from "./Componenets/ReviewList";
import Header from "./Componenets/Header";
import NavBar from "./Componenets/navBar";
import Categories from "./Componenets/Categories";
import SingleReview from "./Componenets/SingleReview";
import Comments from "./Componenets/Comments";
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelection = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };
  return (
    <div>
      <Header />
      <NavBar />
      <Categories handleCategorySelection={handleCategorySelection} />
      <Routes>
        <Route
          path="/"
          element={<ReviewList selectedCategory={selectedCategory} />}
        />
        <Route path="/review/:reviewId" element={<SingleReview />} />
        <Route path="/review/:reviewId/comments" element={<Comments />} />
      </Routes>
    </div>
  );
};

export default App;
