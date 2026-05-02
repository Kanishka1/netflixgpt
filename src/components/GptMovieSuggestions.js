import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieList from "./MovieList";
import lang from "../utils/languageConstants";
const GptMovieSuggestions = () => {
	const suggestedMovies = useSelector(
		(store) => store.movies.gptSuggestedMovies,
	);
	const langKey = useSelector((store) => store.config.lang);
	return (
		<div className="m-4 p-4 bg-black text-white">
			<div>
				<MovieList title={lang[langKey].suggested} movies={suggestedMovies} />
			</div>
		</div>
	);
};

export default GptMovieSuggestions;