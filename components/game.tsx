import React, { useCallback, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { controlOptions, starsState } from "./atom";
import { STEP, INTERVAL } from "./constants";
import { createStar } from "./utils";
import Control from "./controlPanel";
import Star from "./star";
import { IStars } from "../interfaces";
import { Field } from "../styles";
import { Main } from "../styles";

const Game: React.FC = () => {
  const [stars, updateStars] = useRecoilState(starsState);
  const [controlState] = useRecoilState(controlOptions);
  const requestRef = useRef<number>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);
  const fieldRef = useRef<HTMLDivElement>(null);

  const yStep = useCallback(() => {
    updateStars((oldStars: IStars[]) => {
      const newStars = Array();
      for (let star of oldStars) {
        const newY: number = star.y + (STEP * controlState.speed) / 65;
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
    updateStars((oldStars: IStars[]) => [...oldStars, createStar()]);
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
