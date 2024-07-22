"use client";
import { useState } from "react";
import { Badge } from "@chakra-ui/react";

type WorkState = "WORK" | "PAUSE" | "STOP";

export default function Container() {
  const [workState, setWorkState] = useState<WorkState>("STOP");
  return (
    <>
      <h1>Container</h1>
    </>
  );
}
