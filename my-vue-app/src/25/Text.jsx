const Text = ({ h3, h1, text1, p, color, size,broj }) => {
  return (
    <div style={{ boxSizing: "border-box" }}>
      <h4
        style={{
          color: "gray",
          fontWeight: "100",
          padding: "0px",
        }}
      >
        {h3}
      </h4>
      <h1 style={{ padding: "0px" }}>{h1}</h1>
      <p style={{ borderRight: "2px solid grey", padding: "0px 10px" }}>
        {text1}
      </p>
      <p>{p}</p>
      <p>{color}</p>
      <p>{size}</p>
      <p>{broj}</p>
    </div>
  );
};
export default Text;
