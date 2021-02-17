import styled from "@emotion/styled";

const Field = styled.div({
  height: "100vh",
  width: "70%",
  position: "relative",
  overflowY: "hidden",
  overflowX: "hidden",
});
const Main = styled.div({
  display: "flex",
  justifyContent: "center",
});
const StarValue = styled.p`
  font-size: 100px;
  text-align: center;
  line-height: 15px;
  font-weight: bold;
`;
const StarContent = styled.div`
  position: absolute;
`;
const StartButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`;
const ControlPanel = styled.div`
  position: relative;
`;
const Background = styled.div`
  background-image: url("background2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;
export {
  Field,
  StarContent,
  StarValue,
  StartButton,
  Main,
  ControlPanel,
  Background,
};
