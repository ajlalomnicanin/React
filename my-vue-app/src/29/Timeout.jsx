// import { useEffect, useState } from "react";

// const Timeout = () => {
//   const [text, setText] = useState(new Date().toTimeString());

//   useEffect(() => {
//     setTimeout(() => {
//       setText(new Date().toTimeString());
//     }, 1000);

//     // console.log("Effect");

//     // setText(text + 1);
//     // setTimeout(() => { }, 2000);
//   });
//   //   dependensi erej
//   return (
//     <div>
//       <p>{text}</p>
//     </div>
//   );
// };
// export default Timeout;

import { useEffect, useState } from "react";

const Timeout = () => {
  const [text, setText] = useState(new Date().toTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(new Date().toTimeString());
      console.log("aaaaaaaa");
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>{text}</p>
    </div>
  );
};
export default Timeout;
