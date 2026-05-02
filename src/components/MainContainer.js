import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  const [mainMovie, setMainMovie] = useState(null);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (movies?.length) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setMainMovie(movies[randomIndex]);
    }
  }, [movies]);

  useEffect(() => {
    if (!mainMovie?.imdbID) return;

    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&i=${mainMovie.imdbID}`
        );
        const data = await res.json();

        if (data.Response === "True") {
          setMovieDetails(data);
        } else {
          console.error(data.Error);
        }
      } catch (err) {
        console.error("API Error:", err);
      }
    };

    fetchMovieDetails();
  }, [mainMovie?.imdbID]);

  if (!movieDetails) return null;

  return (
    <div>
      <VideoTitle
        title={movieDetails.Title}
        plot={movieDetails.Plot}
        director={movieDetails.Director}
      />
      <VideoBackground title={movieDetails.Title} />
    </div>
  );
};

export default MainContainer;