import React, { Component } from "react";
import "../styles/movie.css";
import Movie from "./Movie";

class HomeCatalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
    };
  }
  inputSerach = (event) => {
    let input = event.target.value;
    this.setState({ searchInput: input });
  };

  render() {
    let movies = this.props.movies;
    let thisMovie = movies.filter((m) =>
      m.title.toLowerCase().includes(this.state.searchInput.toLowerCase())
    );

    return (
      <div id="u-input">
        <input
          type="text"
          placeholder="Search for movies"
          value={this.state.searchInput}
          onChange={this.inputSerach}
        />
        <div id="button">Search</div>
        <h2>The Movies</h2>
        <div id="movie-container">
          {thisMovie.map((i) => {
            return (
              <Movie
                key={i.id}
                movie={i}
                rentMovie={this.rentMovie}
                rented={false}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomeCatalog;
