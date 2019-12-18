import React, { Component } from "react";
import "./comp-two.css";

class CompTwo extends Component {
  state = {
    isChanged: false
  };

  toggleChange = () => {
    this.setState({
      isChanged: !this.state.isChanged
    });
  };

  render() {
    const boxClass = this.state.isChanged ? "bgBox green" : "bgBox";

    return (
      <>
        <button onClick={this.toggleChange}>Click two</button>
        <div className={boxClass}>Second Div</div>
      </>
    );
  }
}

export default CompTwo;
