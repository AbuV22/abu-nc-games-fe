import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SortBy from "./SortBy";
const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
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

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };
  const sortedReviews = [...reviews]
    .filter((review) => category === undefined || category === review.category)
    .sort((a, b) => {
      let comparison = 0;
      switch (sortOption) {
        case "date":
          comparison = new Date(b.date) - new Date(a.date);
          break;
        case "commentCount":
          comparison = b.comment_count - a.comment_count;
          break;
        case "votes":
          comparison = b.votes - a.votes;
          break;
        default:
          comparison = 0;
      }
      return sortOrder === "asc" ? comparison : -comparison;
    });
  return (
    <>
      <SortBy handleSortChange={handleSortChange} />
      <select onChange={handleSortOrderChange}>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
      <table id="table">
        <tbody>
          {sortedReviews.map((review, index) => {
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
    </>
  );
};

export default ReviewList;
