import { useState } from "react";

const ToDoList = () => {
  const [data, setData] = useState([
    { text: "pokusaj jedan", selected: false },
  ]);

  const [input, setInput] = useState("");
  const [editInput, seteditInput] = useState();

  return (
    <div>
      <div style={{ backgroundColor: "red", padding: "20px 30px" }}>
        <h1 style={{ textAlign: "center" }}>My todo list</h1>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            style={{ margin: 0, padding: 0, width: "75%", height: 40 }}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            style={{ width: "35%", height: 40, margin: 0, padding: 0 }}
            onClick={() =>
              setData([
                ...data,
                { text: input, selected: false, editing: false },
              ])
            }
          >
            Add
          </button>
        </div>
      </div>
      {data &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: item.selected ? "gray" : "white",
                display: "flex",
              }}
            >
              {item.editing ? (
                <div style={{ flexGrow: "1" }}>
                  <input
                    value={editInput}
                    onChange={(e) => e.target.value}
                    type="text"
                  />
                  <button
                    onClick={() => {
                      const newState = data.map((item, i) => {
                        if (i === index) {
                          return { ...item, text: editInput, editing: false };
                        }
                        return item;
                      });

                      setData(newState);
                    }}
                  >
                    save
                  </button>
                </div>
              ) : (
                <p
                  onClick={() => {
                    //   const newState = [...data];
                    //   newState[index].selected = !newState[index].selected;

                    const newState = data.map((item, i) => {
                      if (i === index) {
                        return { ...item, selected: !item.selected };
                      }
                      return item;
                    });

                    setData(newState);
                  }}
                  style={{ flexGrow: "1" }}
                >
                  {item.text}
                </p>
              )}
              <button
                onClick={() => {
                  const newState = data.filter((item, i) => i !== index);

                  setData(newState);
                }}
                style={{ width: "50px" }}
              >
                X
              </button>
              <button
                onClick={() => {
                  const newState = data.map((item, i) => {
                    if (i === index) {
                      return { ...item, editing: !item.editing };
                    }
                    return item;
                  });

                  setData(newState);
                }}
                style={{ width: "50px" }}
              >
                Edit
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ToDoList;
