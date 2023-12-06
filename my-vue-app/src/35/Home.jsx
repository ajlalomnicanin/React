import React, { useContext } from "react";
import { UserContext } from "./UserContextProvider";

function Home() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <p>Name is: {user.firstName}</p>
      <p>Lastname is:{user.lastName}</p>
      <p>Email is: {user.email}</p>
      <p>Age is: {user.age}</p>
      <p>Address is : {user.address.address}</p>
      <button
        onClick={() => {
          setUser(undefined);
          localStorage.removeItem("token");
        }}
      ></button>
    </div>
  );
}

export default Home;
