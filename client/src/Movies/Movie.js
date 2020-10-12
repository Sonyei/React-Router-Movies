import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Movie = (props) => {
  const [movie, setMovie] = useState();
  
  const param = useParams()

let id = param.movieId

  useEffect(() => {

    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
    
       axios.get(`http://localhost:5000/api/movies/${id}`) // Study this endpoint with Postman
      .then(res => {
        setMovie(res.data)
      })
      .catch(error => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
    
  );
}

export default Movie;