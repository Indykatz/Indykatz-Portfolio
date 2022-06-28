import { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([{}]);
  // add item handle submit new items
  const handleSubmit = (e) => {
    e.preventDefault();
    setItem([...item, { item: input }]);
    setInput("");
    console.log(item);
  };

  return (
    <div>
      <div>
        <h3>An Input</h3>
        <form>
          <label>
            Input:
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
        {item.slice(-4, -1).map((item, index) => {
          return <p key={index}>{item.item}</p>;
        })}
      </div>
    </div>
  );
};

export default Input;
