import React from 'react'
import GptSearchBar from './GptSearchBar'
import { useSelector} from "react-redux";
import GptMovieSuggestions from './GptMovieSuggestions'

const GPTSearch = () => {
  	const suggestedMovies = useSelector(
		(store) => store.movies.gptSuggestedMovies,
	);
  return (
    <div>
       <div className="absolute -z-10">
        <img src="/netflix-bg.jpg" alt="login-logo"></img>
      </div>
      <GptSearchBar></GptSearchBar>
      {suggestedMovies?.length && <GptMovieSuggestions></GptMovieSuggestions>}
    </div>
  )
}

export default GPTSearch