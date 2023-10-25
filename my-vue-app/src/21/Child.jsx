const Child = (props) => {
  const { text, updateText } = props;
  return (
    <div>
      <p style={{ color: text % 2 === 0 ? "red" : "yellow" }}>Child</p>
      <p>{text}</p>
      <button onClick={() => updateText(text + 2)}>Button</button>
    </div>
  );
};
export default Child;
