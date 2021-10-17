import { useEffect, useMemo, useState, VFC } from "react";
import { clearInterval, setInterval } from "timers";

export const getPrimes = (maxRange: number): number[] =>
  [...Array(maxRange + 1)]
    .map((_, i) => i)
    .slice(2)
    .filter((n) => {
      for (let i = 2; i < n; i += 1) {
        if (n % i === 0) return false;
      }
      return true;
    });

console.log(getPrimes(10));

export const Counter: VFC<{ limit: number }> = ({ limit }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const reset = (): void => setTimeLeft(limit);
  const tick = (): void => setTimeLeft((t) => t - 1);
  const primes = useMemo(() => getPrimes(limit), [limit]);
  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    if (timeLeft === 0) setTimeLeft(limit);
  }, [timeLeft, limit]);
  return (
    <>
      <p>{timeLeft}</p>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
};
