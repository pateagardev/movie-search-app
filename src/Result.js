import React from "react"
import 'bootstrap/js/dist/modal'

function Result({result, openDetail}) {

  return (
    <div className='result' onClick={() => openDetail(result.imdbID)}>
      <img src={result.Poster} alt="" />
      <h4>{result.Title}</h4>
    </div>
  );
}

export default Result;
