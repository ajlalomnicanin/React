import React, { useState } from "react";
import "./list.css";

function List() {
  const [textInput, setTextInput] = useState("");
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    if (textInput.trim() !== "") {
      // Ako je uneti tekst neprazan
      setItems((prevItems) => [...prevItems, textInput]);
      setTextInput(""); // Očisti input polje
    }
  };
  return (
    <div className="main">
      <p>What's the Plan for Today?</p>
      <div className="input1">
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <button onClick={handleAddItem}>ADD</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
