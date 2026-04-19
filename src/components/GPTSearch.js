import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GPTSearch = () => {
  return (
    <div>
       <div className="absolute -z-10">
        <img src="/netflix-bg.jpg" alt="login-logo"></img>
      </div>
      <GptSearchBar></GptSearchBar>
      <GptMovieSuggestions></GptMovieSuggestions>
    </div>
  )
}

export default GPTSearch