import { useState, useEffect } from "react";

export const Text = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Component mounted");
    return()=>{
      console.log('component unmounted')
    }
  }, [text]);
  return (
    <div>
      <input
        onChange={(e) => {
          setText(e.target.value);
        }}
      >
        <h1>{text}</h1>
      </input>
    </div>
  );
};
export default Text;
