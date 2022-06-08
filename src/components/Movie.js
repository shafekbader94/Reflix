import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/movie.css";

class Movie extends Component {
  rentMovie = () => {
    this.props.rentMovie(this.props.movie.id);
  };
  render() {
    const movie = this.props.movie;
    const rented = this.props.rented;

    return (
      <div id="movie-container">
        <div className="mini">
        <h3 className="titleName">{movie.title}</h3>
        <br></br>
        <button className="clickButton" onClick={this.rentMovie}>
        
          {rented[movie.id] ? "-" : "+"}
        </button>
        <Link to={`/movies/${movie.id}`}>
            <img src={movie.img} alt="" />
        </Link>
        </div>
      </div>
    );
  }
}

export default Movie;
