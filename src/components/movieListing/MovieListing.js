import React from "react";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import { useSelector } from "react-redux";
import MovieCard from "../movieCard/MovieCard";
import "./MovieListing.scss"
function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log(movies);
  let renderMovies, renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
       return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div>{"error"}</div>
    );
    renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => {
       return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div>{"error"}</div>
    );
  return (
  <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
        {renderMovies}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
        {renderShows}
        </div>
      </div>
      </div>
  )
}

export default MovieListing;
