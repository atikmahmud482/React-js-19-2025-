import React, { useRef, useState } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);

  return <div>Stopwatch</div>;
}

export default Stopwatch;
