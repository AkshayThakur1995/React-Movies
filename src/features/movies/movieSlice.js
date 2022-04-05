import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async(term) => {
    
    const response = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=97084054&s=${term}`);
        return response.data
})

export const fetchMoviesShows = createAsyncThunk("movies/fetchMoviesShows", async(term) => {

    const response = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=97084054&s=${term}&type=series`);
        return response.data
})

export const fetchMoviesOrShowsDetail = createAsyncThunk("movies/fetchMoviesOrShowsDetail", async(id) => {
    const response = await axios.get(
        `http://www.omdbapi.com/?&apikey=97084054&i=${id}&plot=full`);
        return response.data
})



const initialState = {
    movies:{},
    shows:{},
    selectedMovieOrShow:{}
}

const movieSlice =  createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state, {payload}) => {
            state.movies = payload;
        },
        removeSelected:(state) => {
            state.selectedMovieOrShow = {}
        }
    },
    extraReducers: {
        [fetchMovies.pending]: () => {
            console.log("Pending")
        },
        [fetchMovies.fulfilled]: (state, {payload}) => {
            console.log("Fetched sucess")
            return {...state, movies: payload}
        },
        [fetchMovies.rejected]: () => {
            console.log("Call Rejected")
        },
        [fetchMoviesShows.fulfilled]: (state,{payload}) => {
            console.log("Fetched sucessful");
            return{...state, shows: payload}
        },
        [fetchMoviesOrShowsDetail.fulfilled]: (state, {payload}) => {
            console.log("Fetched sucessful");
            return{...state, selectedMovieOrShow: payload}
        }
    }
})

export const {addMovies} = movieSlice.actions
export const {removeSelected} = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow
export default movieSlice.reducer
