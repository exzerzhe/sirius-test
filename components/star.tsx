import React from "react";
import CSS from "csstype";
import { StarValue } from "../styles";
import { StarContent } from "../styles";

const Star = (props) => {
  const { x, y, value } = props;
  const starStyle: CSS.Properties = {
    backgroundImage: `url('./star2.png')`,
    backgroundSize: "cover",
    height: `200px`,
    width: `200px`,
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "200px",
    left: `${x}px`,
    top: `${y}px`,
  };

  return (
    <StarContent style={starStyle}>
      <StarValue>{value}</StarValue>
    </StarContent>
  );
};

export default Star;
