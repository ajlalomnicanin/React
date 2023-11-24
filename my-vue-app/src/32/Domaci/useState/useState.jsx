import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const State = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
};
export default State;

// import { useState } from "react";

// const State = () => {
//   const [count, setCount] = useState(0);
//   const [showText, setShowText] = useState(true);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//           setShowText(!showText);
//         }}
//       >
//         Click here
//       </button>
//       {showText && <p>This is a text</p>}
//     </div>
//   );
// };
// export default State;
// ---------------------------------------------------------

// import { useState } from "react";

// const State = () => {
//   const [inputValue, setInputValue] = useState("Ajla");
//   return (
//     <div>
//       <input
//         placeholder="napisite nesto......"
//         onChange={(event) => {
//           setInputValue(event.target.value);
//         }}
//       />
//       {inputValue}
//     </div>
//   );
// };
// export default State;
