"use client";
import { useState, useEffect } from "react";
import DisplayCycle from "./(components)/DisplayCycle";
import DisplayTimer from "./(components)/DisplayTimer";
import DisplayStatus from "./(components)/DisplayStatus";
import { Button } from "@chakra-ui/react";
import Controls from "./(components)/Controls";

export type Status = "WORK" | "PAUSE" | "STOP" | "BREAK";

function Container() {
  const [status, setStatus] = useState<Status>("STOP");
  const [prevStatus, setPreviousStatus] = useState<Status>("STOP"); // to track whether the pause/reset occurs during WORK or PAUSE
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(20);
  const [cycle, setCycle] = useState<number>(0);
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
            setPreviousStatus("BREAK");
            setMinutes(0);
            setSeconds(30);
          }
          if (status === "BREAK") {
            setStatus("STOP");
            setPreviousStatus("WORK");
            setMinutes(0);
            setSeconds(20);
            setCycle((prev) => prev + 1);
          }
        }
      }, 200);
    }
    setDisplayTime(
      `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`
    );
    return () => clearInterval(intervalId);
  }, [status, minutes, seconds]);

  const handleStart = () => {
    if (prevStatus === "WORK") setStatus("WORK");
    else if (prevStatus === "BREAK") setStatus("BREAK");
  };

  const handlePause = () => {
    setStatus("PAUSE");
  };

  const handleReset = () => {
    setStatus("STOP");

    if (prevStatus === "WORK") {
      setMinutes(0);
      setSeconds(20);
    } else if (prevStatus === "BREAK") {
      setMinutes(0);
      setSeconds(30);
    }
  };

  return (
    <>
      <div className="flex flex-col md:w-1/2">
        <DisplayCycle cycleNumber={cycle} />
        <DisplayTimer displayTime={displayTime} />

        <div className="flex">
          <DisplayStatus status={status} prevStatus={prevStatus} />
          <Controls
            status={status}
            handleStart={handleStart}
            handlePause={handlePause}
            handleReset={handleReset}
          />
        </div>
      </div>
    </>
  );
}

export default Container;
