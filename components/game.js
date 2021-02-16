import React, { useCallback, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import styled from "@emotion/styled";

import { controlOptions, starsState } from "./atom";
import { STEP, INTERVAL } from "./constants";
import { createStar } from "./utils";
import Control from "./Control";
import Star from "./star";

const Main = styled.div({
  display: "flex",
  justifyContent: "center",
});
const Field = styled.div({
  height: "100vh",
  width: "70%",
  position: "relative",
  overflowY: "hidden",
  overflowX: "hidden",
});

const Game = () => {
  const [stars, updateStars] = useRecoilState(starsState);
  const [controlState] = useRecoilState(controlOptions);
  const requestRef = useRef();
  const intervalRef = useRef();
  const fieldRef = useRef();

  const yStep = useCallback(() => {
    updateStars((oldStars) => {
      const newStars = [];
      for (let star of oldStars) {
        const newY = star.y + (STEP * controlState.speed) / 65;
        newStars.push({
          ...star,
          y: newY,
        });
      }
      return newStars;
    });
    requestRef.current = requestAnimationFrame(yStep);
  }, [controlState.speed, updateStars]);

  const spawnStar = useCallback(() => {
    updateStars((oldStars) => [...oldStars, createStar()]);
  }, [updateStars]);

  useEffect(() => {
    const stop = () => {
      intervalRef.current && clearInterval(intervalRef.current);
      requestRef.current && cancelAnimationFrame(requestRef.current);
    };

    if (controlState.isRunning) {
      intervalRef.current = setInterval(spawnStar, INTERVAL);
      requestRef.current = requestAnimationFrame(yStep);
    } else {
      stop();
    }
    return () => stop();
  }, [controlState.isRunning, yStep, spawnStar]);

  return (
    <>
      <Control />
      <Main>
        <Field ref={fieldRef}>
          {stars.map((star, index) => {
            const x = (fieldRef.current.offsetWidth * star.x) / 150;
            return <Star key={`star-${index}`} {...star} x={x} index={index} />;
          })}
        </Field>
      </Main>
    </>
  );
};

export default Game;
