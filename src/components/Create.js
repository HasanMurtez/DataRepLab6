import { useState } from "react";
import axios from 'axios';

function Create() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieData = {
      title,
      year,
      poster,
    };
    
    axios.post('http://localhost:4000/api/movies', movieData)
      .then((res) => console.log('Response:', res.data))
      .catch((err) => console.error('Error:', err));

    // Optional: clear form fields after submission
    setTitle('');
    setYear('');
    setPoster('');
  }

  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input
            type="text"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Add Movie Poster URL: </label>
          <input
            type="text"
            className="form-control"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
          />
        </div>
        <input type="submit" value="Add Movie" />
      </form>
    </div>
  );
}

export default Create;
