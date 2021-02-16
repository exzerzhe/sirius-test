import React, { useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import { controlOptions } from "./atom";
import styled from "@emotion/styled";

const StartButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
`;
const ControlPanel = styled.div`
  position: relative;
`;

const Control = () => {
  const [controlState, setControlState] = useRecoilState(controlOptions);
  const onStart = useCallback(() => {
    setControlState({ ...controlState, isRunning: true });
  }, [controlState, setControlState]);

  const togglePause = () => {
    setControlState((oldState) => {
      return { ...oldState, isRunning: !oldState.isRunning };
    });
  };
  useEffect(() => {
    document.addEventListener("visibilitychange", () => {
      setControlState((oldState) => {
        return { ...oldState, isRunning: false };
      });
    });
    return () => document.removeEventListener("visibilitychange", () => {});
  }, [setControlState]);

  return (
    <ControlPanel>
      {controlState.isRunning ? (
        <StartButton onClick={togglePause}>PAUSE</StartButton>
      ) : (
        <StartButton onClick={onStart}>START</StartButton>
      )}
    </ControlPanel>
  );
};

export default React.memo(Control);
