import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("Movie List ", title, movies);
  return (
    <div className="px-12 mt-8">
      <h1 className="text-3xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard poster={movie.Poster} key={movie.id}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
