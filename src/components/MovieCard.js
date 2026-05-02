import React from "react";

const MovieCard = ({ poster }) => {
	const FALLBACK_URL =
		"https://m.media-amazon.com/images/M/MV5BNzUyM2YyY2MtNzNlMS00MWU5LTgxNjAtNzZlNmI2NjU2NDZlXkEyXkFqcGc@._V1_SX300.jpg";
	const posterPath = poster !== "N/A" ? poster : FALLBACK_URL;
	return (
		<div className="w-48 pr-4">
			<img
				alt="movie-card"
				src={posterPath}
				onError={(e) => {
					e.target.onerror = null;
					e.target.src = FALLBACK_URL;
				}}
			></img>
		</div>
	);
};

export default MovieCard;
