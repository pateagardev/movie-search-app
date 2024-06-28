import React from "react";
import 'bootstrap/js/dist/modal'

function Detail({selected, close}) {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="container"> 
        <button onClick={close} className="btn btn-close">Close</button>
        <div className="row">
          <div className='col-12 col-md-6 text-center'>
            <img src={selected.Poster} alt="" />
          </div>
          <div className="col-12 col-md-6">
            <h2>{selected.Title}</h2>
            <p>{selected.Year}</p>
            <p>Rating: {selected.imdbRating}</p>
            <p>{selected.Plot}</p>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Detail;
