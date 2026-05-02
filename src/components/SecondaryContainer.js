import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const SecondaryContainer = () => {
	const movies = useSelector((store) => store.movies);
	const langKey = useSelector((store) => store.config.lang);
	return (
		<div className="bg-black">
			<div className="-mt-64 relative z-20 pl-12">
				<MovieList
					title={lang[langKey].nowPlaying}
					movies={movies.nowPlayingMovies}
				></MovieList>

				<MovieList
					title={lang[langKey].popular}
					movies={movies.popularMovies}
				></MovieList>

				<MovieList
					title={lang[langKey].trending}
					movies={movies.trendingMovies}
				></MovieList>

				<MovieList
					title={lang[langKey].upcoming}
					movies={movies.nowPlayingMovies}
				></MovieList>

				<MovieList
					title={lang[langKey].horror}
					movies={movies.nowPlayingMovies}
				></MovieList>
			</div>
		</div>
	);
};

export default SecondaryContainer;
