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

  return (
    <div>
      <Header />
      <NavBar />
      <Categories setSelectedCategory={setSelectedCategory} />
      <Routes>
        <Route
          path="/review"
          element={<ReviewList selectedCategory={selectedCategory} />}
        />
        <Route path="/review/:reviewId" element={<SingleReview />} />
        <Route path="/review/:reviewId/comments" element={<Comments />} />
        <Route
          path="/:category"
          element={<ReviewList selectedCategory={selectedCategory} />}
        />
      </Routes>
      1
    </div>
  );
};

export default App;
