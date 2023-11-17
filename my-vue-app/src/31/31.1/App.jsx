import React, { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
      setAge(response.data);
    });
  };
  return (
    <div>
      <input
        placeholder="Ex.Ajla.."
        onChange={(event) => setName(event.target.value)}
      />
      <button onClick={fetchData}>Predict age</button>
      <h1>Pedicted age:{setAge}</h1>
      <h1>Pedicted count:{age?.count}</h1>
    </div>
  );
}

export default App;

// function App() {
//   //   fetch("https://catfact.ninja/fact")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       console.log(data);
//   //     });

//   const [catFact, setCatFact] = useState("");

//   const fatchCatFact = () => {
//     Axios.get("https://catfact.ninja/fact").then((res) => {
//       setCatFact(res.data.fact);
//     });
//   };
//   useEffect(() => {
//     fatchCatFact();
//   }, []);

//   return (
//     <div>
//       <button onClick={fatchCatFact}> Generate Cat Fact</button>
//       <p>{catFact}</p>
//     </div>
//   );
// }
