const Numbers = ({ handleClick }) => {
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
  return (
    <div>
      {numButtons.map((aButton) => (
        <button className="numberButtons" onClick={handleClick} key={aButton}>
          {aButton}
        </button>
      ))}
    </div>
  );
};

export default Numbers;
