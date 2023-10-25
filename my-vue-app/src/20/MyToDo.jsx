import { useState } from "react";

const MyToDo = () => {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  return (
    <div>
      <div className="App"></div>
      <div className="addTask">
        <input
          type="text"
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        />
        <button>Add Task</button>
      </div>
    </div>
  );
};
export default MyToDo;
