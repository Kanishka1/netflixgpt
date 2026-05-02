import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector, useDispatch } from "react-redux";
import { askLLM } from "../utils/openai";
import { addgptSuggestedMovies } from "../utils/movieSlice";

const GptSearchBar = () => {
	const dispatch = useDispatch();
	const langKey = useSelector((store) => store.config.lang);
	const seachText = useRef(null);

	const fetchMovieByName = async (movieName) => {
		try {
			const res = await fetch(
				`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${movieName}&type=movie&plot=full`,
			);
			const data = await res.json();
			return data;
		} catch (err) {
			console.error(err);
			return null;
		}
	};

	const handleGPTSearchClick = async () => {

		//Make an API call to OPENAI API
		const result = await askLLM(seachText.current.value);
		let movies = [];
		const parsed = JSON.parse(result);
		movies = parsed.movies;

		//Get posters, title from OMDB
		const omdbData = await fetchMoviesData(movies);

		dispatch(addgptSuggestedMovies(omdbData));
	};

	const fetchMoviesData = async (movieNames) => {
		const promises = movieNames.map((name) => fetchMovieByName(name));
		const results = await Promise.all(promises);
		return results.filter((movie) => movie && movie.Response === "True").flatMap((res) => res.Search || []);
	};

	return (
		<div className="pt-[10%] flex justify-center">
			<form
				className="w-1/2 bg-black grid grid-cols-12"
				onSubmit={(e) => e.preventDefault()}
			>
				<input
					ref={seachText}
					type="text"
					className="p-4 m-4 col-span-9 rounded-lg"
					placeholder={lang[langKey].gptPlaceholder}
				></input>
				<button
					className="m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3"
					onClick={handleGPTSearchClick}
				>
					{lang[langKey].search}
				</button>
			</form>
		</div>
	);
};

export default GptSearchBar;
