import React from "react";
import { Route, Routes } from "react-router-dom";
import ReviewList from "./Componenets/ReviewList";
import Header from "./Componenets/Header";
import NavBar from "./Componenets/navBar";
import Categories from "./Componenets/Categories";
import SingleReview from "./Componenets/SingleReview";
const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Categories />
      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/review/:reviewId" element={<SingleReview />} />
      </Routes>
    </div>
  );
};

export default App;
