import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
       nowPlayingMovies: null,
       popularMovies: null,
       trendingMovies: null,
       gptSuggestedMovies: null
    },
    reducers : {
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action)=>{
            state.popularMovies = action.payload;
        },
        addTrendingMovies: (state, action)=>{
            state.trendingMovies = action.payload;
        },
        addgptSuggestedMovies: (state, action)=>{
            state.gptSuggestedMovies = action.payload;
        },
    
    }
});
export const { addNowPlayingMovies, addPopularMovies, addTrendingMovies, addgptSuggestedMovies} = movieSlice.actions;
export default movieSlice.reducer;