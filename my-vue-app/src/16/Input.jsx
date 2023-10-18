const Input = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <p>
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR",
        }).format(value)}
      </p>
    </div>
  );
};
export default Input;
