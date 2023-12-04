// // mora da ima 4 inputa i ozbiljnu validaciju tih inputa
// // inputi su name, email, password i confrim password
// // name mora biti duze od 3 slova, email mora biti validan email
// // password mora biti duzi od 8 slova, imati jedno veliko slovo i jedan znak
// // confirm password mora biti isti kao password\
// // morate imati crveni tekst ispod svakog inputa ako nesto nije tacno
// // i naravno button za register

// //za napredne:  koristiti add user rutu za register sa dummy json vebsajta
// import "./login.css";
// import React, { useState } from "react";

// function Register() {
//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [confrim, setConfrim] = useState();

//   const handleRegister = () => {
//     if (name.length < 3) {
//       return;
//     } else {
//     }

//     if (password === confrim) {
//       return;
//     } else {
//       alert("!");
//     }
//   };

//   return (
//     <div className="main">
//       <input type="text" placeholder="name" />
//       <input type="text" placeholder="email" />
//       <input type="password" placeholder="password" />
//       <input type="text" placeholder="confrim" />
//       <button onClick>Register</button>
//     </div>
//   );
// }

// export default Register;

// mora da ima 4 inputa i ozbiljnu validaciju tih inputa
// inputi su name, email, password i confrim password
// name mora biti duze od 3 slova, email mora biti validan email
// password mora biti duzi od 8 slova, imati jedno veliko slovo i jedan znak
// confirm password mora biti isti kao password\
// morate imati crveni tekst ispod svakog inputa ako nesto nije tacno
// i naravno button za register

//za napredne:  koristiti add user rutu za register sa dummy json vebsajta

function Register() {
  const handleRegister = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: "Muhammad",
          lastName: "Ovi",
          age: 250,
          /* other user data */
        }),
      });
      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="email" />
      <input type="password" placeholder="password" />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
