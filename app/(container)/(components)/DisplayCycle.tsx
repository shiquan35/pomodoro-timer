import React from "react";

type DisplayCycleProps = {
  cycleNumber: number;
};

const DisplayCycle: React.FC<DisplayCycleProps> = ({ cycleNumber }) => {
  return (
    <div className="bg-white flex justify-center">
      <span className="text-black text-4xl md:text-6xl">
        Cycle: {cycleNumber}
      </span>
    </div>
  );
};

export default DisplayCycle;
