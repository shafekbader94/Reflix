import React, { Component } from "react";
import "../styles/movie.css";

class MovieDeatlis extends Component {
  render() {
    const movie = this.props.movie;

    return (
      <div>
        <h1>{movie.title}</h1>
      <div id="aboutMovie">
        <p>{`Year: ${movie.year}`}</p>
        <img src={movie.img} alt="" />
        <br></br>
      </div> 
      <p className="textDesc">About:</p>
        <p className="textDesc">{movie.descrShort}</p>
      </div>
    );
  }
}

export default MovieDeatlis;
