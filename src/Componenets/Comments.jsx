import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

const Comments = () => {
  const { reviewId } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://abu-games.onrender.com/api/reviews/${reviewId}/comments`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComments(data);
        setLoading(false);
      });
  }, [reviewId]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return comments.map((comment) => {
    return (
      <div key={comment.comment_id}>
        <h2>Comment ID: {comment.comment_id}</h2>
        <h2>Author: {comment.author}</h2>
        <h2>Body: {comment.body}</h2>
        <h2>Created At: {formatDate(comment.created_at)}</h2>
        <h2>Votes: {comment.votes}</h2>
        <Link to={`/review/${reviewId}`}>
          <h2>Click To Go Back To Review</h2>
        </Link>
      </div>
    );
  });
};

export default Comments;
