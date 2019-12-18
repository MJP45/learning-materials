// BUTTON AS A STATELESS FUNCTIONAL COMPONENT

import React from "react";

const Button = props => (
  <button onClick={props.handleClick}>{props.buttonText}</button>
);

export default Button;

//  BUTTON AS A CLASS BASED COMPONENT

// import React, { Component } from "react";

// class Button extends Component {
//   render() {
//     return (
//       <button onClick={this.props.handleClick}>{this.props.buttonText}</button>
//     );
//   }
// }

// export default Button;
