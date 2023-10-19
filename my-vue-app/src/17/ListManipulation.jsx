import { useState } from "react";

const ListManipulation = () => {
  const [list, setList] = useState([1, 2]);

  // const handleItemClick = (vrednost) => {
  //   let newList = list.filter((_, index) => {
  //     vrednost !== index;
  //   });
  //   setList(newList);
  // };

  const handleItemClick = (index) => {
    const newList = [...list]; // Stvaramo kopiju originalne liste
    newList.splice(index, 1); // Uklanjamo samo jedan element na datom indeksu
    setList(newList); // Ažuriramo stanje liste
  };

  return (
    <div>
      <button onClick={() => setList([...list, "p"])}>Add</button>
      <button
        onClick={() => {
          const newState = [...list];

          newState.pop();

          setList(newState);
        }}
      >
        Remove
      </button>

      {list.map((value, index) => {
        return (
          <p onClick={() => handleItemClick()} key={index}>
            {value}
          </p>
        );
      })}
    </div>
  );
};

export default ListManipulation;
