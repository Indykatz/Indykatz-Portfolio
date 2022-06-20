import { useState } from "react";
// import { evaluate } from "mathjs";
import {
  TheCalculator,
  CalcBox,
  NumButtons,
  OppButtons,
} from "../css/Calculator.styled";

const Calculator = () => {
  const operatorButtons = ["+", "-", "*", "/"];
  const numButtons = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    ".",
    "c",
    "=",
  ];
  // calcultor state
  const [input, setInput] = useState("");
  // function to caluclate result
  const calculate = (aButton) => {
    if (aButton === "=") {
      // const result = evaluate(input);
      // setInput(result);
    } else if (aButton === "c") {
      setInput("");
    } else setInput(input + aButton);
  };
  // handle click
  const handleClick = (e) => {
    const display = e.target.textContent;
    calculate(display);
  };
  return (
    <TheCalculator>
      {/* <h1>Calculator</h1> */}
      <h1 className="display" data-testid="display">
        {input}
      </h1>
      <CalcBox>
        {numButtons.map((aButton) => (
          <NumButtons onClick={handleClick} key={aButton}>
            {aButton}
          </NumButtons>
        ))}
      </CalcBox>
      <CalcBox>
        {operatorButtons.map((aButton) => (
          <OppButtons
            className="oppButtons"
            onClick={handleClick}
            key={aButton}
          >
            {aButton}
          </OppButtons>
        ))}
      </CalcBox>
    </TheCalculator>
  );
};

export default Calculator;
