import { useEffect } from "react";
import Card from 'react-bootstrap/Card';
import React from "react";

function MovieItem(props) {
    useEffect(() => {
        console.log("Movie Item:", props.myMovie); // Change to myMovie
    }, [props.myMovie]);

    return (
        <div>
            <Card>
                <Card.Header>{props.myMovie.Title}</Card.Header> {/* Change to myMovie */}
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
                        <footer>{props.myMovie.Year}</footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieItem;
