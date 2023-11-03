const Button = ({ btn }) => {
  return (
    <div>
      <button
        style={{ width: "20px", height: "20px", borderRadius: "50%" }}
      ></button>
      <button>{btn}</button>
      <button></button>
      <button></button>
    </div>
  );
};
export default Button;
