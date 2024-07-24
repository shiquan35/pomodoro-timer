import React from "react";
import { Badge } from "@chakra-ui/react";
import { Status } from "../Container";
import { useMediaQuery } from "react-responsive";

type DisplayStatusProps = {
  status: Status;
};

const DisplayStatus: React.FC<DisplayStatusProps> = ({ status }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="flex flex-col mt-5">
      <div className="text-center">
        {status === "WORK" || status === "BREAK" ? (
          <Badge
            variant={
              status === "WORK" || status === "BREAK" ? "solid" : "subtle"
            }
            colorScheme="green"
            fontSize={isMobile ? "1em" : "3em"}
            width={isMobile ? "80px" : "170px"}
          >
            {status}
          </Badge>
        ) : (
          <Badge
            variant="outline"
            colorScheme="green"
            fontSize={isMobile ? "1em" : "3em"}
            width={isMobile ? "80px" : "170px"}
          >
            WORK
          </Badge>
        )}
      </div>

      <div className="mt-3 text-center">
        <Badge
          variant={status === "PAUSE" ? "solid" : "outline"}
          colorScheme="yellow"
          fontSize={isMobile ? "1em" : "3em"}
          width={isMobile ? "80px" : "170px"}
        >
          PAUSE
        </Badge>
      </div>

      <div className="mt-3 text-center">
        <Badge
          variant={status === "STOP" ? "solid" : "outline"}
          colorScheme="red"
          fontSize={isMobile ? "1em" : "3em"}
          width={isMobile ? "80px" : "170px"}
        >
          STOP
        </Badge>
      </div>
    </div>
  );
};

export default DisplayStatus;
