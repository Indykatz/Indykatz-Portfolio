import React from "react";
import { useState } from "react";
import {
  CounterBox,
  CountArea,
  UpdownButton,
  ResetButton,
} from "../css/Counter.styled";

const Counter = () => {
  // counter activity
  let [count, setCount] = useState(0);

  const increaseClick = () => {
    setCount((count += 1));
  };
  const decreaseClick = () => {
    setCount((count -= 1));
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <CountArea>{count}</CountArea>
      <CounterBox>
        <UpdownButton onClick={decreaseClick}>-</UpdownButton>
        <UpdownButton onClick={increaseClick}>+</UpdownButton>
      </CounterBox>
      <ResetButton onClick={reset}>reset</ResetButton>
    </div>
  );
};

export default Counter;
