import React, { useEffect } from "react";
import MovieListing from "../movieListing/MovieListing";
import axios from "axios";
import {useDispatch} from "react-redux"
import {fetchMovies, fetchMoviesShows } from "../../features/movies/movieSlice";
function Home() {
  const movieText = "harry"
  const showText = "friends"
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMovies(movieText))
    dispatch(fetchMoviesShows(showText))
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img">
        <MovieListing />
      </div>
    </div>
  );
}

export default Home;
