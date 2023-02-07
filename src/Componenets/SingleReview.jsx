import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};
const SingleReview = () => {
  const { reviewId } = useParams();
  const [reviews, setReviews] = useState({});
  useEffect(() => {
    fetch(`https://abu-games.onrender.com/api/reviews/${reviewId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setReviews(data.reviews);
      });
  }, [reviewId]);
  return (
    <div>
      <h1>Title: {reviews.title}</h1>
      <h2>Review ID: {reviews.review_id}</h2>
      <h2>Category: {reviews.category}</h2>
      <h3>Designer: {reviews.designer}</h3>
      <h3>Owner: {reviews.designer}</h3>
      <h3>Review Body: "{reviews.review_body}"</h3>
      <h3>Votes: {reviews.votes}</h3>
      <h3>Created At: {formatDate(reviews.created_at)}</h3>
      <Link to={`/review/${reviews.review_id}/comments`}>
        <h3>Click to see Comments</h3>
      </Link>
      <img src={reviews.review_img_url} alt="game"></img>
    </div>
  );
};

export default SingleReview;
