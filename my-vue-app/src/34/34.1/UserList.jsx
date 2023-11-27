import { createContext, useState, useEffect } from "react";

export const UserProvider = createContext({});

export const UserList = (props) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users/1");
        const responseData = await response.json();

        setUser(responseData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <UserProvider.Provider value={{ user }}>
      {props.children}
    </UserProvider.Provider>
  );
};
