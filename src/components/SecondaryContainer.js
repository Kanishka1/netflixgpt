import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-64 relative z-20 pl-12">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        ></MovieList>

        <MovieList title={"Popular"} movies={movies.popularMovies}></MovieList>

        <MovieList
          title={"Trending"}
          movies={movies.trendingMovies}
        ></MovieList>

        <MovieList
          title={"Upcoming"}
          movies={movies.nowPlayingMovies}
        ></MovieList>

        <MovieList
          title={"Horror"}
          movies={movies.nowPlayingMovies}
        ></MovieList>
      </div>
    </div>
  );
};

export default SecondaryContainer;
