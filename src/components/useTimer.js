import { useState, useEffect } from "react";

export default function useTimer() {
  console.log("useTimer hook called");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useTimer hook useEffect callback");
    const interval = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);

    return () => {
      console.log("useTimer hook useEffect cleanup");
      clearInterval(interval);
    };
  }, []);

  return count;
}
