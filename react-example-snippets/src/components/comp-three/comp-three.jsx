import React, { Component } from "react";
import "./comp-three.css";

class CompThree extends Component {
  state = {
    searchText: ""
  };

  handleInput = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  render() {
    return (
      <>
        <p>Text prints here: {this.state.searchText}</p>
        <input type="text" onInput={e => this.handleInput(e)} />
      </>
    );
  }
}

export default CompThree;
