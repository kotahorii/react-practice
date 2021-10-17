import { VFC } from "react";
import "./useTimer";

type Props = {
  timeLeft: number;
  reset: () => void;
};

export const Counter: VFC<Props> = ({ timeLeft, reset }) => {
  return (
    <>
      <p>{timeLeft}</p>
      <button onClick={() => reset()}>Reset</button>
    </>
  );
};
