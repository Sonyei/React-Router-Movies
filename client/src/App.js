import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { Route, Switch } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

export default function App () {
  // const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      Axios.get('http://localhost:5000/api/movies')
        .then(res=> {
          setMovieList(res.data)

          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  // const addToSavedList = id => {
  //   // This is stretch. Prevent the same movie from being "saved" more than once
  // };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Switch>
        <Route path='/movies/:movieId'>
         <Movie movies={movies} key={movies.id}/>
        </Route>

        <Route path='/'>
          <MovieList movies={movies}/>
        </Route>

      </Switch>
    </div>
  );
}
