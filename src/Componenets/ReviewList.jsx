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
        console.log(data.reviews);
      });
  }, []);

  return (
    <table id="table">
      <tbody>
        {reviews
          // .filter((review) => {
          //   review.category === selectedCategory || selectedCategory === "";
          // })
          .map((review, index) => {
            return (
              <tr key={index}>
                <td className="title">
                  <Link to={`/review/${review.review_id}`}>{review.title}</Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default ReviewList;
