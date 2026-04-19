import { useDispatch } from "react-redux";
import { addPopularMovies, } from "../utils/movieSlice";
import { useEffect } from "react";

//Fetch data from API and update store
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = async () => {
    const data = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=batman&type=movie&y=2011&page=1&plot=full`,
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.Search));
  };

  //Call it only once on render
  useEffect(() => {
    popularMovies();
  }, []);
};
export default usePopularMovies;
