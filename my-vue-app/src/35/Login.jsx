// // mora da ima dva inputa i validaciju tih inputa
// // inputi su email i password
// // validacija za email je da je to validan email
// // i mora da ima login button koji loguje korisnika

// import { useEffect, useState } from "react";
// import "./login.css";

// // za napredne implementirati login preko auth rute na dummy json vebsajtu

// function Login() {
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");

//   const [password, setPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const [answer, setAnswer] = useState([]);

//   function isEmailValid(email) {
//     // Regular expression for a simple email validation
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
//     return emailRegex.test(email);
//   }

//   const isPasswordValid = (pass) => {
//     const reg =
//       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!$#&*.\\\-_+])[A-Za-z\d@!$#&*.\\\-_+]{8,}$/;
//     return reg.test(pass) ? (
//       "Ispravan"
//     ) : (
//       <p style={{ color: "red" }}>
//         Your password should have a minimum of 8 characters and contain a mix of
//         letters, numbers, and special characters. For example, you could use
//         Pass1122# as a valid password.
//       </p>
//     );
//   };

//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://dummyjson.com/users/1");
//         const data = await response.json();
//         setAnswer(data);
//       } catch (error) {
//         console.log("Error fetching data: ", error);
//       }
//     };

//   // const Podation = () => {
//   //   return answer.map((item, index) => {
//   //     <div key={index}>
//   //       <p>{item.name}</p>
//   //       <p>{item.password}</p>
//   //     </div>;
//   //   });
//   // };

//   const Podation = () => {
//     if (!Array.isArray(answer)) {
//       return null; // ili neki drugi fallback ako answer nije niz
//     }

//     return answer.map((item, index) => (
//       <div key={index}>
//         <p>{item.name}</p>
//         <h1>{item.password}</h1>
//       </div>
//     ));
//   };
//   const handleLogin = async () => {
//     let valid = true;

//     if (!isEmailValid(email)) {
//       setEmailError(<p style={{ color: "red" }}> Email is very wrong!</p>);
//       valid = false;
//     } else {
//       setEmailError("");
//     }

//     if (isPasswordValid(password) !== "Ispravan") {
//       setPasswordError(isPasswordValid(password));
//       valid = false;

//       // login funkcija
//     } else {
//       setPasswordError("");
//       fetchData();
//     }
//   };

//   return (
//     <div className="main">
//       <input value={email} onChange={(e) => setEmail(e.target.value)} />
//       {emailError && <p>{emailError}</p>}

//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       {passwordError && <p>{passwordError}</p>}

//       <button onClick={handleLogin}>Login</button>
//       <Podation />
//     </div>
//   );
// }

// export default Login;

// mora da ima dva inputa i validaciju tih inputa
// inputi su email i password
// validacija za email je da je to validan email
// i mora da ima login button koji loguje korisnika

// mora da ima dva inputa i validaciju tih inputa
// inputi su email i password
// validacija za email je da je to validan email
// i mora da ima login button koji loguje korisnika

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// za napredne implementirati login preko auth rute na dummy json vebsajtu

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");


  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function isEmailValid(email) {
    // Regular expression for a simple email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return emailRegex.test(email);
  }

  const loginAction = async (formEmail, formPassword) => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formEmail,
          password: formPassword,
          // expiresInMins: 60, // optional
        }),
      });

      const data = await response.json();

      if (data.message === "") {
        throw new Error("Invalid credentials.");

      }
      localStorage.setItem("token", data.token);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async () => {
    let valid = true;

    if (!isEmailValid(email)) {
      setEmailError("email is very very wrong");
      valid = false;
    } else {
      setEmailError("");
    }

    if (password.length < 8) {
      setPasswordError("Password wrong");
      valid = false;
    } else {
      setPasswordError("");
    }

    // if (valid) {
    loginAction(email, password);
    // }
  };

  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      {emailError && <p>{emailError}</p>}

      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      {passwordError && <p>{passwordError}</p>}

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
