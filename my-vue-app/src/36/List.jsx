import React, { useState } from "react";
import "./listt.css";

// imate prop koji se zove data koji je arraj objekata
// i morate da napravite da je svaki list item selectable
// znaci da vam treba state koji ovo snima
// na click list itema se menja checkbox vrednost tog itema

function List(props) {
  let { data } = props;
  data = [
    { id: 1, title: "first 1", selected: false },
    { id: 2, title: "second 2", selected: false },
    { id: 3, title: "third 3", selected: false },
  ];
  const [checkboxItems, setCheckboxItems] = useState(data);

  const handleClick = (itemId) => {
    setCheckboxItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, selected: !item.selected } : item
      )
    );
  };

  return (
    <div className="App">
      <h1>Selectable List Items</h1>
      <ul>
        {checkboxItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleClick(item.id)} 
            className={item.selected ? "selected" : ""}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
