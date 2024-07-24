import React from "react";
import { Button } from "@chakra-ui/react";

type ControlsProps = {
  status: string;
  handleStart: () => void;
  handlePause: () => void;
  handleReset: () => void;
};

const Controls: React.FC<ControlsProps> = ({
  status,
  handleStart,
  handlePause,
  handleReset,
}) => {
  return (
    <div className="bg-white flex justify-center">
      {status === "WORK" || status === "BREAK" ? (
        <Button onClick={handlePause}>Pause</Button>
      ) : (
        <Button onClick={handleStart} disabled={status === "WORK"}>
          Start
        </Button>
      )}

      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
};

export default Controls;
