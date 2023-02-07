import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Comments = () => {
  const { reviewId } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://abu-games.onrender.com/api/reviews/${reviewId}/comments`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComments(data);
        console.log(data);
      });
  });
};

export default Comments;
