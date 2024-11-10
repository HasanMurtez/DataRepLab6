const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize express application
const app = express();
// Define the port number the server will listen on
const port = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define a GET route to send a list of movies to the client
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    // Respond with the movie data in JSON format
    res.status(200).json({ movies });
});

// Define a POST route to receive movie data from the client
app.post('/api/movies', (req, res) => {
    // Extract title, year, and poster URL from the request body
    const { title, year, poster } = req.body;
    console.log(`Received movie: Title - ${title}, Year - ${year}, Poster - ${poster}`);
    res.status(201).send('Movie received');
});

// Start the server and listen for incoming requests on the defined port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
