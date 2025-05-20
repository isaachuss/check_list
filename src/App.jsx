import React, { useState } from "react";
import "./App.css";
import Checkbox from "./Components/Checkbox";

function App() {
  const [tasks, setTasks] = useState([
    "estudar historia",
    "estudar portugues",
    "estudar react",
    "estudar fisica",
    "estudar matematica",
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  return (
    <>
      <div className="div1">
        <div className="cima">
          <h2 className="title">Check list</h2>
        </div>

        <div className="list">
          {tasks.map((task, index) => (
            <div className="linha" key={index}>
              <h3>
                <Checkbox id={`cbx-${index}`} label={task} />
              </h3>
            </div>
          ))}
        </div>

        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Digite uma nova tarefa"
        />

        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>
    </>
  );
}

export default App;
