import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  return (
    <table id="table">
      <tbody>
        {reviews.map((review) => {
          return (
            <tr key={review.id}>
              <Link to={`/review/${review.review_id}`}>
                <td className="title">{review.title}</td>
              </Link>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ReviewList;
