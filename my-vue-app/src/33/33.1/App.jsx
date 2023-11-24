import React from "react";
import { UserProvider } from "./UserContext";
import UserList from "./UserList";

const App = () => {
  return (
    <UserProvider>
      <div className="App">
        <UserList />
      </div>
    </UserProvider>
  );
};
export default App;
