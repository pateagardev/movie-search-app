import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

import Search from './components/Search';
import Result from './components/Result';
import Detail from "./components/Details";

function App() {
  const [state, setState] = useState({
    search: '',
    results: [],
    movies: [],
    selected: {}
  });

  const fetchRandomMovies = async () => {
    try {
      const response = await axios.get('http://www.omdbapi.com/?s=movie&apikey=293b4072');
      const movies = response.data.Search;
      const randomMovies = movies.sort(() => 0.5 - Math.random()).slice(0, 10);
      setState(prevState => {
        return { ...prevState, movies: randomMovies };
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRandomMovies();
  }, []);

  const handleInput = (event) => {
    let search = event.target.value;
    setState((prevState) => {
      return { ...prevState, search: search };
    });
  };

  const openDetail = (id) => {
    axios.get('http://www.omdbapi.com/?i=' + id + '&apikey=293b4072')
      .then(({ data }) => {
        setState((prevState) => { return { ...prevState, selected: data } });
      }).catch(err => console.log(err));
  };

  const searchResult = (event) => {
    if (event.type === 'click' || event.key === "Enter") {
      axios.get('http://www.omdbapi.com/?s=' + state.search + '&apikey=293b4072')
        .then(res => {
          setState(prevState => {
            return { ...prevState, results: res.data.Search };
          });
        })
        .catch(err => console.log(err));
    }
  };

  const close = () => {
    setState((prevState) => { return { ...prevState, selected: {} } });
  };

  return (
    <div className="w-100 main-wrapper">
      {typeof state.selected.Title !== "undefined" ? 
        <Detail selected={state.selected} close={close} /> 
      : (
        <header className='w-100 text-center'>
          <h2 className='main-header'>Search Movies From IMDb</h2>
          <Search handleInput={handleInput} searchResult={searchResult} />
          <div className="container">
            <div className="row">
              {(state.results.length ? state.results : state.movies).map((result, i) => (
                <div className='col-12 col-sm-6 col-md-3 col-lg-3 my-2' key={i}>
                  <Result result={result} openDetail={openDetail} />
                </div>
              ))}
            </div>
          </div>
        </header>
      )}
    </div>
  );
}

export default App;
