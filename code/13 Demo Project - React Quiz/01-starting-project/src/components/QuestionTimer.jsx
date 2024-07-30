import {useState, useEffect} from "react";

export default function QuestionTimer({timeout, onTimeout, isRunning}) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout, isRunning]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <progress id='question-time' value={remainingTime} max={timeout}></progress>
  );
}