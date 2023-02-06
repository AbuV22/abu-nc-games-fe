import React from "react";
import { useState, useEffect } from "react";

const ReviewList = ({ selectedCategory }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://abu-games.onrender.com/api/reviews")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReviews(data.reviews);
      });
  }, []);

  return reviews.map((review) => {
    return <section key={review.id}>{review.title}</section>;
  });
};

export default ReviewList;
