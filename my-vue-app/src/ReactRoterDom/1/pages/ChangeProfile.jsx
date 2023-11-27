import React, { useState } from "react";
import { useContent } from "react";
import { AppContext } from "../app";

function ChangeProfile() {
  const { setUserName } = useContent(AppContext);
  const [newUserName, setNewUserName] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setNewUserName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setUserName(newUserName);
        }}
      ></button>
    </div>
  );
}

export default ChangeProfile;
