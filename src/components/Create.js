import { useState } from "react";
import axios from 'axios';

function Create() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    // Create an object to store movie data using the state variables
    const movieData = {
      title,
      year,
      poster,
    };

    // Send a POST request to the server with the movie data
    axios.post('http://localhost:4000/api/movies', movieData)
      .then((res) => console.log('Response:', res.data)) // Log server response if successful
      .catch((err) => console.error('Error:', err)); // Log error if request fails

    // Optional: clear the form fields after successful submission
    setTitle(''); // Reset title field
    setYear('');  // Reset year field
    setPoster(''); // Reset poster URL field
  }

  return (
    <div>
      <h2>This is my Create Component.</h2>
      {/* Form for adding movie details */}
      <form onSubmit={handleSubmit}>
        {/* Input for movie title */}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input
            type="text"
            className="form-control"
            value={title} // Binds input value to title state
            onChange={(e) => setTitle(e.target.value)} // Updates title state on change
          />
        </div>

        {/* Input for movie release year */}
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input
            type="text"
            className="form-control"
            value={year} // Binds input value to year state
            onChange={(e) => setYear(e.target.value)} // Updates year state on change
          />
        </div>

        {/* Input for movie poster URL */}
        <div className="form-group">
          <label>Add Movie Poster URL: </label>
          <input
            type="text"
            className="form-control"
            value={poster} // Binds input value to poster state
            onChange={(e) => setPoster(e.target.value)} // Updates poster state on change
          />
        </div>

        {/* Submit button for the form */}
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

// Export the Create component to be used in other parts of the app
export default Create;
