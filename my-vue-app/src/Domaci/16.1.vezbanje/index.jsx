import { useState } from "react";

function App1() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(count+1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Set to Zero
      </button>
      {count}
    </div>
  );
}
export default App1;

// ---------------------------------------------------------

// import { useState } from "react";

// function App1() {
//   const [textColor, setTextColor] = useState("");

//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           setTextColor(textColor === "black" ? "red" : "black");
//         }}
//       >
//         Show/Hide
//       </button>
//       <h1 style={{ color: textColor }}>Welcome </h1>
//     </div>
//   );
// }
// export default App1;

// --------------------------------------------------------
// function App1() {
//     const [showText, setShowText] = useState(true);

//     const toggleText=()=>{
//   setShowText(!showText)
//     }
//     return (
//       <div className="App">
//         <button onClick={toggleText}>Show/Hide</button>
//         {showText && <h1>Welcome </h1>}
//       </div>
//     );
//   }
//   export default App1;

// --------------------------------------------------------

// import { useState } from "react";

// function App1() {
//   const [inputValue, setInputValue] = useState("");

//   const handleInput = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div className="App">
//       {inputValue}
//       <input type="text" onChange={handleInput} />
//     </div>
//   );
// }
// export default App1;
