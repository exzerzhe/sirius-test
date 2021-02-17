import React from "react";
import CSS from "csstype";
import { StarValue } from "../styles";
import { StarContent } from "../styles";
import { IStarValues } from "../interfaces";

const Star: React.FC<IStarValues> = (props) => {
  const { x, y, value } = props;
  const starStyle: CSS.Properties = {
    backgroundImage: `url('./star2.png')`,
    backgroundSize: "cover",
    width: "200px",
    height: `200px`,
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
