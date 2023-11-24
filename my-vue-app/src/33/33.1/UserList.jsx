import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserList = () => {
  const { user } = useContext(UserContext);
  return <div>
    <h2>User List</h2>
    <ul>{user.map((user)=>{
        return <li key={user.id}>{user.name}</li>
    })}</ul>
  </div>;
};
export default UserList;
