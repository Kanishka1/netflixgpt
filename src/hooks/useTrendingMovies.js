import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

//Fetch data from API and update store
const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trendingMovies = async () => {
    const data = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=avengers&type=movie&y=2011&page=1&plot=full`,
    );
    const json = await data.json();
    dispatch(addTrendingMovies(json.Search));
  };

  //Call it only once on render
  useEffect(() => {
    trendingMovies();
  }, []);
};
export default useTrendingMovies;
