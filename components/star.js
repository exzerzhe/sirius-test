import React from "react";
import styled from "@emotion/styled";
const StarValue = styled.p`
  font-size: 100px;
  text-align: center;
  line-height: 15px;
  font-weight: bold;
`;
const StarContent = styled.div`
  position: absolute;
`;
const Star = (props) => {
  const { x, y, value } = props;
  const starStyle = {
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
