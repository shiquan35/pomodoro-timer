import React from "react";

type DisplayCycleProps = {
  cycleNumber: number;
};

const DisplayCycle: React.FC<DisplayCycleProps> = ({ cycleNumber }) => {
  return (
    <div className="flex justify-center">
      <span className="text-white text-4xl md:text-6xl">
        Cycle: {cycleNumber}
      </span>
    </div>
  );
};

export default DisplayCycle;
