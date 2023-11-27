import { useContext } from "react";
import { UserContext } from "./ContextProvider";
import LoginForm from "./LoginForm";

const Class30 = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  return (
    <div>
      {user && (
        <div
          style={{
            margin: "auto",
            border: "1px solid black",
            width: "300px",
            padding: "50px",
          }}
        >
          <img src={user.image} alt="" />
          <div style={{ paddingLeft: "55px" }}>
            <p>Name is: {user.firstName}</p>
            <p>Lastname is:{user.lastName}</p>
            <p>Email is: {user.email}</p>
            <p>Age is: {user.age}</p>
            <p>Address is : {user.address.address}</p>{" "}
          </div>
          <button
            onClick={() => {
              setUser(undefined);
            }}
          >
            Log out
          </button>
        </div>
      )}
      {!user && <LoginForm />}
    </div>
  );
};

export default Class30;
