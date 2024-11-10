import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieItem from './movieitem';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    // Fetch data from the server on component mount
    useEffect(() => {
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                setMovies(response.data.movies); // Store the fetched movies in state
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <div>
            {movies.map((movie) => (
                <MovieItem myMovie={movie} key={movie.imdbID} />
            ))}
        </div>
    );
};

export default Movies;
