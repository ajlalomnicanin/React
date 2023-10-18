import { useState } from "react";
const CounterList = () => {
  const [list, setList] = useState("Neki paragraf");
  return (
    <div>
      <button
        onClick={() => {
          setList(());
        }}
      >
        add paragraf
      </button>
      <p>{list.}</p>
    </div>
  );
};
export default CounterList;
