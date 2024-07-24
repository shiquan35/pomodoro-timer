import React from "react";

type DisplayTimerProps = {
  displayTime: string;
};

const DisplayTimer: React.FC<DisplayTimerProps> = ({ displayTime }) => {
  return (
    <div className="bg-white flex justify-center mt-5">
      <span className="text-black text-6xl md:text-9xl">{displayTime}</span>
    </div>
  );
};

export default DisplayTimer;
