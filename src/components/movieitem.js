import React from 'react';



const MovieItem = (props)=>{
    return(
        <div>
            <h3>{props.myMovie.Title}</h3>
            <h4>{props.myMovie.Year}</h4>
            <img src={props.myMovie.Poster}></img>


        </div>
    )
}
export default MovieItem;