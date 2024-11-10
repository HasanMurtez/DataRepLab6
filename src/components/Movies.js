import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieItem from './movieitem';

// Define the Movies component
const Movies = () => {
    // Declare a state variable 'movies' to hold the list of movies, initialized as an empty array
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/movies') // Make GET request to fetch movies
            .then((response) => {
                setMovies(response.data.movies); // Store the fetched movies in state
            })
            .catch((error) => {
                console.error('Error fetching data:', error); // Log any error that occurs during fetch
            });
    }, []); 

    return (
        <div>
            {movies.map((movie) => (
                <MovieItem myMovie={movie} key={movie.imdbID} /> // Pass movie data as a prop and set a unique key
            ))}
        </div>
    );
};

// Export the Movies component to use it in other parts of the app
export default Movies;
