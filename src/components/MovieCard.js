import React from "react";

const MovieCard = ({ poster }) => {
  const posterPath =
    poster !== "N/A"
      ? poster
      : "https://m.media-amazon.com/images/M/MV5BNzUyM2YyY2MtNzNlMS00MWU5LTgxNjAtNzZlNmI2NjU2NDZlXkEyXkFqcGc@._V1_SX300.jpg";
  return (
    <div className="w-48 pr-4">
      <img alt="movie-card" src={posterPath}></img>
    </div>
  );
};

export default MovieCard;
