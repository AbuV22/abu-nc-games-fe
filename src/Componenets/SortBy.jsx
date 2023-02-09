import React from "react";

const SortBy = ({ handleSortChange }) => {
  return (
    <>
      <p>Sort by:</p>
      <select onChange={handleSortChange}>
        <option value="">Default</option>
        <option value="date">Date</option>
        <option value="commentCount">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
    </>
  );
};

export default SortBy;
