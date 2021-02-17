import React, { useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import { controlOptions } from "./atom";
import { StartButton } from "../styles";
import { ControlPanel } from "../styles";

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
