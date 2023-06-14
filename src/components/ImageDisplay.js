import "./ImageDisplay.css";
import { useState } from "react";

function ImageDisplay(props) {
  return (
    <div>
      <img src={props.currentUrl} />
      <p>{props.index}</p>
    </div>
  );
}
export default ImageDisplay;
