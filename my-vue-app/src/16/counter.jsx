import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log("Counter clicked", count);
        }}
      >
        Click me
      </button>
      <p>{count}</p>
    </div>
  );
};
export default Counter;

// -------------------------------------------------------

// import { useState } from "react";
// const Counter = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//           console.log("Counter clicked", count);
//         }}
//       >
//         Click me
//       </button>
//       <p>{count}</p>
//     </div>
//   );
// };
// export default Counter;
