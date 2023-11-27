import { useContent } from "react";
import { AppContext } from "../app";
import ChangeProfile from "./ChangeProfile.jsx";

export const Profile = () => {
  const { userName } = useContent(AppContext);
  return (
    <div>
      <h1>Profile, korisnik je {userName}</h1>
      <ChangeProfile />
    </div>
  );
};
