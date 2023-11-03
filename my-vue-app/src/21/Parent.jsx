import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p style={{ color: count % 5 === 0 ? "green" : "black" }}>Parent</p>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Button
      </button>
      <Child text={count} updateText={setCount} />
    </div>
  );
};
export default Parent;

// hendlati