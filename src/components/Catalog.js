import React, { Component } from "react";
import "../styles/movie.css";
import Movie from "./Movie";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
    };
  }
  rentMovie = (id) => {
    let userID = this.props.user.id;
    this.props.rentMovie(userID, id);
  };

  inputSerach = (event) => {
    let input = event.target.value;
    this.setState({ searchInput: input });
  };

  render() {
    let movies = this.props.movies;
    let user = this.props.user;
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
        <span>
          <h3>User: {user.name}</h3>
        </span>
        <span>
          <h3 className="budgetColor">Budget: {user.budget} $</h3>
        </span>
        <hr></hr>

        {Object.keys(user.rented).some((m) => user.rented[m]) ? (
            <div>
          <h2>Rented Movies</h2>
        <div>
        <div id="movie-container">
            {movies.map((i) => {
              if (user.rented[i.id]) {
                return (
                  <Movie
                    key={i.id}
                    movie={i}
                    rentMovie={this.rentMovie}
                    rented={user.rented}
                  />
                );
              }
            })}
          </div>
        </div>
          </div>
        ) : (
          ""
        )}
   
        <h2>The Movies</h2>
        <div id="movie-container">
          {thisMovie.map((i) => {
            return (
              <Movie
                key={i.id}
                movie={i}
                rentMovie={this.rentMovie}
                rented={user.rented}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Catalog;
