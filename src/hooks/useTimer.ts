import { useState, useEffect } from "react";

const SECOND = 1000;
const MINUTES = SECOND*60;

export default function useTimer(deadline: number = 60) {
  const [time, setTime] = useState(deadline * 1000);

  useEffect(() => {
    setTime(deadline * 1000);
  }, [deadline]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((previousTime) => {
        if (previousTime <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return previousTime - SECOND;
      });
    }, SECOND);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const minutes = String(Math.floor((time / MINUTES) % 60)).padStart(2, "0");
  const seconds = String(Math.floor((time / SECOND) % 60)).padStart(2, "0");

  return {minutes, seconds};
}
