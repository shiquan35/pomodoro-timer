"use client";
import { useState, useEffect } from "react";
import DisplayCycle from "./(components)/DisplayCycle";
import DisplayTimer from "./(components)/DisplayTimer";
import DisplayStatus from "./(components)/DisplayStatus";

export type Status = "WORK" | "PAUSE" | "STOP" | "BREAK";

function Container() {
  const [status, setStatus] = useState<Status>("STOP");
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(20);
  const [cycle, setCycle] = useState<number>(10);
  const [displayTime, setDisplayTime] = useState<string>(
    `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`
  );

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    if (status === "WORK" || status === "BREAK") {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else if (minutes > 0) {
          setMinutes((prev) => prev - 1);
          setSeconds(59);
        } else {
          // Timer finished!
          // WORK --> BREAK
          // or BREAK --> STOP

          if (status === "WORK") {
            setStatus("BREAK");
            setMinutes(0);
            setSeconds(10);
          }
          if (status === "BREAK") {
            setStatus("STOP");
            setMinutes(0);
            setSeconds(20);
            setCycle((prev) => prev + 1);
          }
        }
        setDisplayTime(
          `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`
        );
      }, 200);
    }
    return () => clearInterval(intervalId);
  }, [status, minutes, seconds]);

  const handleStart = () => {
    setStatus("WORK");
  };

  const handlePause = () => {
    setStatus("PAUSE");
  };

  const handleReset = () => {
    setMinutes(2);
    setSeconds(0);
    setStatus("STOP");
  };

  return (
    <>
      <div className="flex flex-col md:w-1/2">
        <DisplayCycle cycleNumber={cycle} />
        <DisplayTimer displayTime={displayTime} />
        <div className="flex">
          <DisplayStatus status={status} />

          <div className="controls">
            <button
              className="text-white"
              onClick={handleStart}
              disabled={status === "WORK"}
            >
              Start
            </button>
            <button
              className="text-white"
              onClick={handlePause}
              disabled={status === "PAUSE"}
            >
              Pause
            </button>
            <button className="text-white" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container;
