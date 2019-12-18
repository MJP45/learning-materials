import React, { Component } from "react";
import ImageDisplay from "../image-display/image-display";

class FilterComp extends Component {
  state = {
    images: [
      "http://placekitten.com/200/300",
      "https://placedog.net/500",
      "https://placebear.com/200/300",
      "https://www.placecage.com/c/200/300"
    ]
  };
  render() {
    return (
      <>
        <h2>This is the filter comp:</h2>
        {this.state.images
          .filter(image => image.includes("bear"))
          .map(image => (
            <ImageDisplay imageUrl={image}></ImageDisplay>
          ))}
      </>
    );
  }
}

export default FilterComp;
