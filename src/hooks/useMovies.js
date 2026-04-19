import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

//Fetch data from API and update store
const useMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = async () => {
    const data = await fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=america&type=movie&y=2011&page=1&plot=full`,
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.Search));
  };

  //Call it only once on render
  useEffect(() => {
    nowPlayingMovies();
  }, []);
};
export default useMovies;
