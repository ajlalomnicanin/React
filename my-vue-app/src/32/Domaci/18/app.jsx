import { useState } from "react";

const App = () => {
    const [todoList,setToDoList]=useState([])
    const [newTask,setNewTask]=useState("")
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={}/>
        <button>Add Task</button>
      </div>
      <div className="list"></div>
    </div>
  );
};
export default App;
