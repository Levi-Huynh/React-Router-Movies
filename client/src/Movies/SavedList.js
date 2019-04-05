import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

export default class SavedList extends Component {
  constructor(props) {
    super(props);
    
  }


  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink exact to={`/movies/${movie.id}`} activeClassName="activeNavButton">{movie.title}</NavLink>
        ))}
        <Link to={"/"} className="home-button">Home</Link>
      </div>
    );
  }
}
