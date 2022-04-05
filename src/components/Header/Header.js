import React, { useState } from 'react'
import {Link} from "react-router-dom"
import user from "../../images/user.png"
import {useDispatch} from "react-redux"
import "./Header.scss"
import { fetchMovies, fetchMoviesShows } from '../../features/movies/movieSlice'
function Header() {
  const dispatch = useDispatch()
  const [term, setTerm] = useState("")
  const submithandler = (e) => {
    e.preventDefault()
    if(term === "") return alert("please enter search term ")

    dispatch(fetchMovies(term.trim()))
    dispatch(fetchMoviesShows(term.trim()))
    setTerm("")
  }
  return (
    <div className='header'>
        <Link to="/">
          <div className='logo'>
              Movie App
          </div>  
        </Link>
          <div className='search-bar'>
          <form onSubmit={submithandler}>
            <input type="text" value={term} placeholder="search movies or shows" onChange={(e) => setTerm(e.target.value)}/>
            <button type='submit'><i className='fa fa-search'></i></button>
          </form>
          </div>
        <div className='user-image'>
            <img src={user} alt="user"></img>
        </div>
    </div>
  )
}

export default Header