import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  useEffect(() => {
    fetch("https://abu-games.onrender.com/api/reviews")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReviews(data.reviews);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <table id="table">
      <tbody>
        {reviews
          .filter(
            (review) => category === undefined || review.category === category
          )
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
