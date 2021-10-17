import { useEffect, useMemo, useState } from "react";

import { clearInterval, setInterval } from "timers";
export const useTimer = (limit: number) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const reset = (): void => setTimeLeft(limit);
  const tick = (): void => setTimeLeft((t) => t - 1);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) setTimeLeft(limit);
  }, [timeLeft, limit]);
  return { timeLeft, reset };
};
