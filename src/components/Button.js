import React, { useState } from "react";

const Button = () => {
  const [click, setCLick] = useState(false);
  return (
    <div>
        <h3>A Button</h3>
      <div>
        <button onClick={() => setCLick((prevClick) => !prevClick)}>
          Click
        </button>
        <p>Click Staue : {click.toString()}</p>
      </div>
    </div>
  );
};

export default Button;
