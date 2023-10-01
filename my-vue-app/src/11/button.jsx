import "./button.css";

const Button = ({ title = "Click", style = {}, className = "", onPress }) => {
  return (
    <button
      className={"myButton" + { className }}
      style={style}
      onClick={() => {
        if (onPress) onPress();
      }}
    ></button>
  );
};
export default Button;
