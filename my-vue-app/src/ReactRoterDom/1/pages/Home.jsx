import { useContent } from "react";
import { AppContext } from "../app";
export const Home = () => {
  const { userName } = useContent(AppContext);
  return (
    <div>
      <h1>Ovo je pocetna strana, username je {userName}</h1>
    </div>
  );
};
