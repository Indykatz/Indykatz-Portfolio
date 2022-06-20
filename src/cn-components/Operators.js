const Operators = ({ handleClick }) => {
  const operatorButtons = ["+", "-", "*", "/"];
  return (
    <div>
      {operatorButtons.map((aButton) => (
        <button className="oppButtons" onClick={handleClick} key={aButton}>
          {aButton}
        </button>
      ))}
    </div>
  );
};

export default Operators;
