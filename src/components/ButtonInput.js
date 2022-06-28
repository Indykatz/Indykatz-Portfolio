import React, { useState } from "react";

const ButtonInput = () => {
  const [item, setItem] = useState([{}]);
  // add item handle submit new items
  const handleClickA = (e) => {
    e.preventDefault();
    setItem([...item, { item: "A" }]);
  };
  const handleClickB = (e) => {
    e.preventDefault();
    setItem([...item, { item: "B" }]);
  };
  return (
    <div>
      <h3>Button A or Button B</h3>
      <div>
        <button onClick={handleClickA}>Button A</button>
        <button onClick={handleClickB}>Button B</button>
        {item.slice(-4, -1).map((item, index) => {
          return <p key={index}>Clicked : {item.item}</p>;
        })}
      </div>
    </div>
  );
};

export default ButtonInput;
