// EXAMPLE OF COMPONENT TAKING IN DATA FROM A PARENT

import React from "react";

const ImageDisplay = props => <img src={props.imageUrl} alt="sdfsadf" />;

export default ImageDisplay;

// IMAGEDISPLAY AS A CLASS BASED COMPONENT

// import React, { Component } from "react";

// class ImageDisplay extends Component {
//   render() {
//     return <img src={this.props.imageUrl} alt="sdfsadf" />;
//   }
// }

// export default ImageDisplay;
