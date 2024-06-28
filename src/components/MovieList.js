import React, { useState } from "react"
import axios from 'axios';
function MovieList(movie, movieResult) {
  const [title, setTitle] = useState({})

  const handleData = (id) => {
    axios.get('http://www.omdbapi.com/?i='+id+'&apikey=293b4072').then(({data}) => {
      let result = data;
      setTitle(result)
      alert(id)
    })
    
  }
  return (
    <div className='movie'>
      <img src={movie.Poster} alt="" />
      <h4>{movie.Title}</h4>
    </div>
  )
}

export default MovieList;