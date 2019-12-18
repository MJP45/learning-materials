import React, { Component } from "react";
import "./comp-one.css";
import Button from "../button/button";
import SearchBar from "../search-bar/search-bar";

class CompOne extends Component {
  state = {
    searchText: ""
  };

  // toggleBox = () => {
  //   this.setState({
  //     isShowing: !this.state.isShowing
  //   });
  // };

  parentFunc = () => {
    alert("This is happening in the parent!");
  };

  updateSearchText = searchText => {
    this.setState({
      searchText
    });
  };

  render() {
    return (
      <>
        <Button
          buttonText="Child button comp"
          handleClick={this.parentFunc}
        ></Button>
        <SearchBar
          handleSearch={searchText => this.updateSearchText(searchText)}
        ></SearchBar>
        <p>{this.state.searchText}</p>
      </>
    );
  }
}

export default CompOne;
