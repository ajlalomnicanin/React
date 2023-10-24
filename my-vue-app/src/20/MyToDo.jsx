import { useState } from "react";

const MyToDo = () => {
    const [toDoList,setToDoList]=useState()
  return (
    <div>
      <div className="App"></div>
      <div className="addTask">
        <input type="text" />
        <button>Add Task</button>
      </div>
    </div>
  );
};
export default MyToDo;
