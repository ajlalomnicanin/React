import { useContext } from "react";
import { UserProvider } from "./UserList";

const Class30 = () => {
  const { user } = useContext(UserProvider);

  if (!user) {
    // Obradi situaciju kada user nije definisan
    console.error("User not defined!");
    return null; // Ili prikaži odgovarajući fallback UI
  }

  console.log(user);

  return <div>User info: {user.name}</div>;
};

export default Class30;
