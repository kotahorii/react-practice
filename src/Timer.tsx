import { VFC } from "react";
import { Counter } from "./Counter";
import { useTimer } from "./useTimer";

export const Timer: VFC<{ limit: number }> = ({ limit }) => {
  const { timeLeft, reset } = useTimer(limit);

  return <Counter timeLeft={timeLeft} reset={reset} />;
};
