// mora da ima dva inputa i validaciju tih inputa
// inputi su email i password
// validacija za email je da je to validan email
// i mora da ima login button koji loguje korisnika

import { useState } from "react";

// za napredne implementirati login preko auth rute na dummy json vebsajtu

function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function isEmailValid(email) {
    // Regular expression for a simple email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return emailRegex.test(email);
  }

  const isPasswordValid = (pass) => {
    const reg =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!$#&*.\\\-_+])[A-Za-z\d@!$#&*.\\\-_+]{8,}$/;
    return reg.test(pass)
      ? "Ispravan"
      : "Your password should have a minimum of 8 characters and contain a mix of letters, numbers, and special characters. For example, you could use Pass12# as a valid password.";
  };

  const handleLogin = async () => {
    let valid = true;

    if (!isEmailValid(email)) {
      setEmailError("Email is very wrong!");
      valid = false;
    } else {
      setEmailError("");
    }

    // if (password.length < 8) {
    //   setPasswordError("Password wrong");
    //   valid = false;
    // } else {
    //   setPasswordError("");
    // }

    if (isPasswordValid(password) !== "Ispravan") {
      setPasswordError(isPasswordValid(password));
      valid = false;

      // login funkcija
    } else {
      setPasswordError("");
    }
  };

  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      {emailError && <p>{emailError}</p>}

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {passwordError && <p>{passwordError}</p>}

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
