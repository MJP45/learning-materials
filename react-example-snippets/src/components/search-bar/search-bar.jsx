// SEARCHBAR AS A STATELESS FUNCTIONAL COMPONENT

import React from "react";

const SearchBar = props => (
  <input
    type="text"
    onInput={event => props.handleSearch(event.target.value)}
  />
);

export default SearchBar;

// SEARCHBAR AS A CLASS BASED COMPONENT

// import React, { Component } from "react";

// class SearchBar extends Component {

//   render() {
//     return <input type="text" onInput={event => this.props.handleSearch(event.target.value)} />;
//   }
// }

// export default SearchBar;
