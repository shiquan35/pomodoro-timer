import React from "react";
import { Button } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="ml-5 mt-5 flex justify-center items-center">
      {status === "WORK" || status === "BREAK" ? (
        <Button
          onClick={handlePause}
          colorScheme="cyan"
          width={isMobile ? "80px" : "150px"}
          height={isMobile ? "100px" : "240px"}
        >
          Pause
        </Button>
      ) : (
        <Button
          onClick={handleStart}
          colorScheme="cyan"
          width={isMobile ? "80px" : "150px"}
          height={isMobile ? "100px" : "240px"}
          disabled={status === "WORK"}
        >
          Start
        </Button>
      )}

      <div className="ml-3">
        <Button
          onClick={handleReset}
          colorScheme="whiteAlpha"
          width="55px"
          height={isMobile ? "100px" : "240px"}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Controls;
