import { useEffect, useState } from "react";

const SimpleEffect = () => {
  const [state, setState] = useState("nesto");

  const [state2, setState2] = useState("nesto2");
  useEffect(() => {
    console.log("useEffect");
    const getItems = fetch({ method: "get" });
  }, []);

  useEffect(() => {
    console.log("useEffect2", state);
    const promise = new Promise((resolve, reject) => {
      resolve("click");
    });
    promise.then((value) => {
      console.log(value);
    });
  }, [state]);

  return (
    <div>
      {state}
      {state2}
      <button
        onClick={() => {
          setState2("novo2");
        }}
      >
        click
      </button>
      <button
        onClick={() => {
          setState("novo");
        }}
      >
        click
      </button>
    </div>
  );
};
export default SimpleEffect;
