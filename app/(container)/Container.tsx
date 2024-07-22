"use client";
import { useState, useEffect } from "react";
import { Badge } from "@chakra-ui/react";

type WorkState = "WORK" | "PAUSE" | "STOP" | "BREAK";

function Container() {
  const [workState, setWorkState] = useState<WorkState>("STOP");
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(20);
  const [cycle, setCycle] = useState<number>(0);

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    if (workState === "WORK" || workState === "BREAK") {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          // Timer finished!
          // WORK --> BREAK
          // or BREAK --> STOP

          if (workState === "WORK") {
            setWorkState("BREAK");
            setMinutes(0);
            setSeconds(10);
          }
          if (workState === "BREAK") {
            setWorkState("STOP");
            setMinutes(0);
            setSeconds(20);
          }
        }
      }, 200);
    }
    return () => clearInterval(intervalId);
  }, [workState, minutes, seconds]);

  const handleStart = () => {
    setWorkState("WORK");
  };

  const handlePause = () => {
    setWorkState("PAUSE");
  };

  const handleReset = () => {
    setMinutes(2);
    setSeconds(0);
    setWorkState("STOP");
  };

  const displayTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return (
    <>
      <div className="flex flex-col">
        <span className="text-white">{workState}</span>
        <span className="timer-display text-white">{displayTime}</span>
        <div className="controls">
          <button
            className="text-white"
            onClick={handleStart}
            disabled={workState === "WORK"}
          >
            Start
          </button>
          <button
            className="text-white"
            onClick={handlePause}
            disabled={workState === "PAUSE"}
          >
            Pause
          </button>
          <button className="text-white" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        {/* display cycle */}

        {/* display timer */}

        {/* display status badges */}

        {/* display buttons */}
      </div>
    </>
  );
}

export default Container;
