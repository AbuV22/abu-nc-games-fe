import React from "react";
import ReviewList from "./Componenets/ReviewList";
import Header from "./Componenets/Header";
import NavBar from "./Componenets/navBar";
import Categories from "./Componenets/Categories";
const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Categories />
      <ReviewList />
    </div>
  );
};

export default App;
