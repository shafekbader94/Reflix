import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

class Landing extends Component {
  render() {
    let users = this.props.users;
    return (
      <div>
        <h1 id="home-title">Who is watching?</h1>

        <div id="home-container">
          {users.map((u) => (
            <div key={u.name} style={{ backgroundColor: `${u.color}` }}>
              <Link to={`/catalog/${u.id}`}>
                <span className="main-directory-text">{u.name}</span>{" "}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Landing;
