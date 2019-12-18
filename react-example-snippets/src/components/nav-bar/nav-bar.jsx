import React, { Component } from "react";
import "./nav-bar.css";
import Button from "../button/button";

class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  getMenuJSX = () => {
    return this.state.isOpen ? (
      <ul>
        <li>Thing 1</li>
        <li>Thing 2</li>
        <li>Thing 3</li>
      </ul>
    ) : null;
  };

  render() {
    const headerClass = this.state.isOpen ? "red" : "";
    return (
      <nav>
        <h1 className={headerClass}>React</h1>
        {this.getMenuJSX()}
        <Button
          buttonText="Open//close nav"
          handleClick={this.toggleMenu}
        ></Button>
      </nav>
    );
  }
}

export default NavBar;
