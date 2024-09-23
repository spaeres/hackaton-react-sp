import React, { useState, useEffect } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = (time % 1000) / 10;
    return (
      `${minutes < 10 ? "0" + minutes : minutes}:` +
      `${seconds < 10 ? "0" + seconds : seconds}:` +
      `${milliseconds < 10 ? "0" + milliseconds : milliseconds}`
    );
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      <div style={{ fontSize: "2em", marginBottom: "20px" }}>
        {formatTime()}
      </div>
      <div>
        {!isRunning ? (
          <button className="btn start" onClick={handleStart}>
            Start
          </button>
        ) : (
          <button className="btn stop" onClick={handleStop}>
            Stop
          </button>
        )}
        <button
          className="btn reset"
          onClick={handleReset}
          disabled={time === 0}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
